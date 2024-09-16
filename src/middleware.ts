import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

import { defaultLanguage, availableLanguages } from './constants/i18n/settings';

const getNegotiatedLanguage = (headers: Negotiator.Headers): string | undefined =>
  new Negotiator({ headers }).language([...availableLanguages]);

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|icons|images|favicon.ico).*)'],
};

export const middleware = (request: NextRequest) => {
  const headers = {
    'accept-language': request.headers.get('accept-language') ?? '',
  };
  const preferredLanguage = getNegotiatedLanguage(headers) || defaultLanguage;

  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = availableLanguages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`
  );

  if (pathnameIsMissingLocale) {
    if (preferredLanguage !== defaultLanguage) {
      return NextResponse.redirect(new URL(`/${preferredLanguage}${pathname}`, request.url));
    }
    const newPathname = `/${defaultLanguage}${pathname}`;
    return NextResponse.rewrite(new URL(newPathname, request.url));
  }

  return NextResponse.next();
};
