'use client';

import { createInstance, Resource } from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { initTranslations } from '@/constants/i18n/i18n';

type Props = {
  resources: Resource;
  locale: string;
  namespaces: string[];
  children: ReactNode;
};

export const TranslationsProvider = ({ children, locale, namespaces, resources }: Props) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
