import { dir } from 'i18next';
import type { Metadata } from 'next';

import Layout from '@/components/layout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const RootLayout = ({
  params,
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) => {
  const { lang } = params;

  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <Layout lang={lang}>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
