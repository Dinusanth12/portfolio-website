import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  isRateLimited, 
  sanitizeInput, 
  isValidEmail, 
  validateRequest, 
  addSecurityHeaders,
  SecurityError,
  ValidationError,
  logSecurityEvent
} from '@/lib/security';
import { 
  errorHandler, 
  createErrorResponse, 
  ErrorType, 
  ErrorSeverity 
} from '@/lib/error-handler';

const resend = new Resend(process.env.RESEND_API_KEY);

function createEmailTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}, clientIP: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 600;">New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Portfolio Website</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
        <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 20px;">Contact Information</h2>
        <div style="display: grid; gap: 12px;">
          <div>
            <strong style="color: #374151;">Name:</strong>
            <span style="margin-left: 8px;">${data.firstName} ${data.lastName}</span>
          </div>
          <div>
            <strong style="color: #374151;">Email:</strong>
            <a href="mailto:${data.email}" style="margin-left: 8px; color: #3b82f6; text-decoration: none;">${data.email}</a>
          </div>
          <div>
            <strong style="color: #374151;">Subject:</strong>
            <span style="margin-left: 8px;">${data.subject}</span>
          </div>
        </div>
      </div>
      
      <div style="background: #f1f5f9; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
        <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 20px;">Message</h2>
        <div style="white-space: pre-wrap; line-height: 1.7; color: #374151;">${data.message}</div>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; font-size: 14px; color: #6b7280;">
          📧 This message was sent from your portfolio website contact form<br>
          🕒 Sent on: ${new Date().toLocaleString()}<br>
                     🌐 IP: ${clientIP}
        </p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Security validation
    validateRequest(request);
    
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    if (isRateLimited(clientIP, 3)) { // 3 requests per minute for contact form
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { ip: clientIP, endpoint: '/api/contact' });
      return createErrorResponse(
        errorHandler.handleError(
          new SecurityError('Too many requests. Please try again later.', 429, 'RATE_LIMIT_EXCEEDED'),
          request
        )
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error: any) {
      logSecurityEvent('INVALID_JSON', { ip: clientIP, error: error?.message || 'Unknown error' });
      return createErrorResponse(
        errorHandler.handleError(
          new ValidationError('Invalid JSON in request body'),
          request
        )
      );
    }

    const { firstName, lastName, email, subject, message } = body;

    // Comprehensive validation with sanitization
    const errors = [];
    
    if (!firstName?.trim()) errors.push('First name is required');
    if (!lastName?.trim()) errors.push('Last name is required');
    if (!email?.trim()) errors.push('Email is required');
    if (!subject?.trim()) errors.push('Subject is required');
    if (!message?.trim()) errors.push('Message is required');
    
    if (firstName?.length > 50) errors.push('First name is too long');
    if (lastName?.length > 50) errors.push('Last name is too long');
    if (subject?.length > 200) errors.push('Subject is too long');
    if (message?.length > 2000) errors.push('Message is too long');

    // Email validation
    if (email && !isValidEmail(email)) {
      errors.push('Invalid email format');
    }

    if (errors.length > 0) {
      logSecurityEvent('VALIDATION_ERROR', { ip: clientIP, errors });
      return createErrorResponse(
        errorHandler.handleError(
          new ValidationError(errors.join(', ')),
          request
        )
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName.trim()),
      lastName: sanitizeInput(lastName.trim()),
      email: sanitizeInput(email.trim().toLowerCase()),
      subject: sanitizeInput(subject.trim()),
      message: sanitizeInput(message.trim())
    };

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      logSecurityEvent('MISSING_CONFIG', { service: 'RESEND_API_KEY' });
      return createErrorResponse(
        errorHandler.handleError(
          new SecurityError('Email service not configured', 500, 'MISSING_CONFIG'),
          request
        )
      );
    }

        // Send email with retry logic
    let emailResult;
    let retryCount = 0;
    const maxRetries = 2;

    while (retryCount <= maxRetries) {
      try {
        emailResult = await resend.emails.send({
          from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
          to: [process.env.CONTACT_EMAIL || 'dinusanth.s@gmail.com'],
          subject: `Contact Form: ${sanitizedData.subject}`,
          html: createEmailTemplate(sanitizedData, clientIP),
        });
        break; // Success, exit retry loop
      } catch (error: any) {
        retryCount++;
        logSecurityEvent('RESEND_RETRY_FAILED', { 
          attempt: retryCount, 
          error: error?.message || 'Unknown error',
          ip: clientIP 
        });
        
        if (retryCount > maxRetries) {
          // Log the error for debugging but don't expose details to client
          logSecurityEvent('RESEND_ALL_ATTEMPTS_FAILED', { 
            error: error?.message || 'Unknown error',
            ip: clientIP 
          });
          return createErrorResponse(
            errorHandler.handleError(
              new SecurityError('Unable to send email at this time. Please try again later.', 503, 'EMAIL_SERVICE_ERROR'),
              request
            )
          );
        }
        
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
      }
    }

    if (emailResult?.error) {
      logSecurityEvent('RESEND_ERROR', { 
        error: emailResult.error,
        ip: clientIP 
      });
      return createErrorResponse(
        errorHandler.handleError(
          new SecurityError('Unable to send email at this time. Please try again later.', 503, 'EMAIL_SERVICE_ERROR'),
          request
        )
      );
    }

    // Log successful email
    logSecurityEvent('EMAIL_SENT_SUCCESSFULLY', { 
      ip: clientIP,
      email: sanitizedData.email,
      subject: sanitizedData.subject 
    });

    // Success response with security headers
    const response = NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

    return addSecurityHeaders(response);

  } catch (error: any) {
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    logSecurityEvent('UNEXPECTED_CONTACT_ERROR', { 
      error: error?.message || 'Unknown error',
      ip: clientIP
    });
    return createErrorResponse(
      errorHandler.handleError(error, request)
    );
  }
} 