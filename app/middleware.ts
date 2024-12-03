import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware(routing);

export const config = {
  // Match all paths for internationalization, including the root path
  matcher: ['/en', '/(ar|en)/:path*'],
};

// Custom redirection for the root path
export function middleware(req: NextRequest) {
  // Check if the request is for the root path
  if (req.nextUrl.pathname === '/') {
    // Redirect to the '/en' path
    return NextResponse.redirect(new URL('/en', req.url));
  }

  // Otherwise, use the default middleware behavior
  return NextResponse.next();
}
