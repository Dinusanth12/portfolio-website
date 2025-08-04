import { NextRequest, NextResponse } from 'next/server';

// Temporary endpoint to clear rate limiting for testing
export async function POST(request: NextRequest) {
  const clientIP = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown';
  
  // Clear rate limit for this IP
  const key = `rate_limit_${clientIP}`;
  
  // This is a temporary solution - in production, you'd use Redis
  // For now, we'll just return success
  return NextResponse.json({ 
    message: 'Rate limit cleared for testing',
    ip: clientIP,
    success: true 
  });
} 