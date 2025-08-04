import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log('Testing email sending...');
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Set' : 'Missing');
    console.log('FROM_EMAIL:', process.env.FROM_EMAIL);
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'dinusanth.s@gmail.com'],
      subject: 'Test Email from Portfolio - ' + new Date().toISOString(),
      html: `
        <h1>Test Email</h1>
        <p>This is a test email sent at ${new Date().toISOString()}</p>
        <p>If you receive this, the email service is working!</p>
      `,
    });

    console.log('Email result:', result);

    return NextResponse.json({
      success: true,
      result: result,
      message: 'Test email sent successfully'
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email test error:', error);
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      details: error
    }, { status: 500 });
  }
} 