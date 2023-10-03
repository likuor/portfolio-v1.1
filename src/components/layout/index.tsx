import { Sora } from '@next/font/google';

import { LayoutProps } from './type';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }: LayoutProps) => (
  <div
    className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
  >
    {children}
  </div>
);

export default Layout;
