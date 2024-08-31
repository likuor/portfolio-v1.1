import type { Metadata } from 'next';

import Layout from '@/components/layout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
