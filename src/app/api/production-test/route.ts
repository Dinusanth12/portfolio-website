import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  const envCheck = {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'Not set',
    FROM_EMAIL: process.env.FROM_EMAIL || 'Not set',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
  };

  // Test Resend API
  let resendTest: { success: boolean; error?: string; result?: unknown; details?: unknown } = { success: false, error: 'Not tested' };
  
  try {
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'dinusanth.s@gmail.com'],
      subject: 'Production Test - ' + new Date().toISOString(),
      html: '<p>This is a production test email</p>',
    });
    
    resendTest = { success: true, result };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    resendTest = { success: false, error: errorMessage, details: error };
  }

  return NextResponse.json({
    environment: envCheck,
    resendTest,
    timestamp: new Date().toISOString()
  });
} 