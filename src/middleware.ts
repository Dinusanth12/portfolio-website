import { NextRequest, NextResponse } from 'next/server';
import { isRateLimited, addSecurityHeaders, logSecurityEvent } from '@/lib/security';

// Paths that require rate limiting
const rateLimitedPaths = [
  '/api/contact',
  '/api/auth',
  '/api/submit',
];

// Paths that should be protected from direct access
const protectedPaths = [
  '/api/',
  '/_next/',
  '/favicon.ico',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';

  // Security logging
  logSecurityEvent('REQUEST_START', {
    path: pathname,
    method: request.method,
    ip,
    userAgent: userAgent.substring(0, 100), // Limit length
  });

  // Block suspicious user agents
  if (userAgent.includes('bot') || 
      userAgent.includes('crawler') || 
      userAgent.includes('spider') ||
      userAgent.length > 500) {
    logSecurityEvent('SUSPICIOUS_USER_AGENT', { userAgent, ip });
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Rate limiting for API endpoints
  if (rateLimitedPaths.some(path => pathname.startsWith(path))) {
    if (isRateLimited(ip, 10)) { // 10 requests per 15 minutes for API
      logSecurityEvent('API_RATE_LIMIT_EXCEEDED', { path: pathname, ip });
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  // Block direct access to protected paths
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    const referer = request.headers.get('referer');
    if (!referer || !referer.includes(request.nextUrl.origin)) {
      logSecurityEvent('DIRECT_ACCESS_ATTEMPT', { path: pathname, ip });
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next();
  addSecurityHeaders(response);

  // Add custom headers for monitoring
  response.headers.set('X-Request-ID', generateRequestId());
  response.headers.set('X-Request-Path', pathname);
  response.headers.set('X-Client-IP', ip);

  return response;
}

// Generate unique request ID
function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 