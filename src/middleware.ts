import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import { i18nConfig } from './constants/i18n/settings';

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

export const middleware = (request: NextRequest) => i18nRouter(request, i18nConfig);
