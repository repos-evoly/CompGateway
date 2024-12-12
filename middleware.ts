import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'], // Supported locales
  defaultLocale: 'ar',   // Default locale
});

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Check if the route already includes a locale
  const localeMatch = /^\/(ar|en)(\/|$)/.test(pathname);

  // If no locale is found in the path, redirect to defaultLocale ('ar')
  if (!localeMatch) {
    url.pathname = `/ar${pathname}`;
    return NextResponse.redirect(url);
  }

  // Use intlMiddleware for locale-based routing
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/:path*', // Apply to all routes
  ],
};
