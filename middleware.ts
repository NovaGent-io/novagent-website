import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect old agent URLs to capabilities page
  const oldAgentPaths = [
    '/solutions/lead-generation-agent',
    '/solutions/appointment-setter-agent',
    '/solutions/customer-support-agent',
    '/solutions/seo-reputation-agent',
    '/solutions/ai-dialer-agent',
    '/solutions/social-media-manager-agent',
    '/solutions/ad-campaign-manager-agent',
  ]

  if (oldAgentPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/capabilities', request.url))
  }

  // Redirect old novasuite paths to capabilities with a note
  if (pathname.startsWith('/solutions/novasuite/')) {
    // For now, let the pages load if they exist
    // In the future, these should redirect to /capabilities
    return NextResponse.next()
  }

  // Redirect /solutions/ai-agent-suite to /capabilities
  if (pathname === '/solutions/ai-agent-suite') {
    return NextResponse.redirect(new URL('/capabilities', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
