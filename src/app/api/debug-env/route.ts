import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const envCheck = {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL ? '✅ Set' : '❌ Missing',
    FROM_EMAIL: process.env.FROM_EMAIL ? '✅ Set' : '❌ Missing',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  };

  return NextResponse.json(envCheck);
} 