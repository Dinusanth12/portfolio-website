import { NextRequest, NextResponse } from 'next/server';

// Security configuration
export const securityConfig = {
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // per window
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  },
  
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:"],
    'connect-src': ["'self'", "https://api.resend.com"],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
  },
  
  // Headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  },
  
  // Input validation
  validation: {
    maxStringLength: 1000,
    maxEmailLength: 254,
    maxUrlLength: 2048,
    allowedHtmlTags: ['b', 'i', 'em', 'strong', 'a'],
  },
} as const;

// Rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function isRateLimited(ip: string, limit: number = 100): boolean {
  const now = Date.now();
  const key = `rate_limit_${ip}`;
  const record = rateLimitStore.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + securityConfig.rateLimit.windowMs });
    return false;
  }
  
  if (record.count >= limit) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input sanitization
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, securityConfig.validation.maxStringLength);
}

// Email validation
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= securityConfig.validation.maxEmailLength;
}

// URL validation
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return url.length <= securityConfig.validation.maxUrlLength;
  } catch {
    return false;
  }
}

// XSS Protection
export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// CSRF Protection
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Security headers middleware
export function addSecurityHeaders(response: NextResponse): NextResponse {
  // Content Security Policy
  const cspDirectives = Object.entries(securityConfig.csp)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
  
  response.headers.set('Content-Security-Policy', cspDirectives);
  
  // Security headers
  Object.entries(securityConfig.headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  return response;
}

// Error handling utilities
export class SecurityError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public code: string = 'SECURITY_ERROR'
  ) {
    super(message);
    this.name = 'SecurityError';
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Request validation
export function validateRequest(request: NextRequest): void {
  const userAgent = request.headers.get('user-agent');
  const contentType = request.headers.get('content-type');
  
  // Check for suspicious user agents
  if (userAgent && (
    userAgent.includes('bot') ||
    userAgent.includes('crawler') ||
    userAgent.includes('spider') ||
    userAgent.length > 500
  )) {
    throw new SecurityError('Invalid request', 403, 'SUSPICIOUS_USER_AGENT');
  }
  
  // Validate content type for POST requests
  if (request.method === 'POST' && contentType !== 'application/json') {
    throw new SecurityError('Invalid content type', 400, 'INVALID_CONTENT_TYPE');
  }
}

// Logging utilities
export function logSecurityEvent(event: string, details: any = {}): void {
  const timestamp = new Date().toISOString();
  console.log(`[SECURITY] ${timestamp} - ${event}`, details);
}

// Environment validation
export function validateEnvironment(): void {
  const requiredEnvVars = ['RESEND_API_KEY'];
  const missing = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
} 