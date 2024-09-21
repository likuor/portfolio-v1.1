import { dir } from 'i18next';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Layout from '@/components/layout';
import { TranslationsProvider } from '@/components/provider/TranslationsProvider';
import '@/styles/globals.css';
import { initTranslations } from '@/constants/i18n/i18n';
import { defaultLanguage } from '@/constants/i18n/settings';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

type Props = {
  params: { lang: string };
  children: ReactNode;
};

const RootLayout = async ({ params, children }: Props) => {
  const { lang } = params;
  const { resources } = await initTranslations(defaultLanguage, ['translation']);

  return (
    <TranslationsProvider resources={resources} locale={lang} namespaces={['translation']}>
      <html lang={lang} dir={dir(lang)}>
        <body>
          <Layout lang={lang}>{children}</Layout>
        </body>
      </html>
    </TranslationsProvider>
  );
};

export default RootLayout;
