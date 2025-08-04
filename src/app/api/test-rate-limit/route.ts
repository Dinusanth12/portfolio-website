import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited } from '@/lib/security';

export async function GET(request: NextRequest) {
  const clientIP = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown';
  
  const isLimited = isRateLimited(clientIP, 20);
  
  return NextResponse.json({ 
    ip: clientIP,
    isRateLimited: isLimited,
    message: isLimited ? 'Rate limited' : 'Not rate limited',
    timestamp: new Date().toISOString()
  });
} 