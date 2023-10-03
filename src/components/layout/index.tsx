import { Sora } from '@next/font/google';

import Navbar from './Navbar';
import { LayoutProps } from './type';

// TODO font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }: LayoutProps) => (
  <div
    className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
  >
    <Navbar />
    {children}
  </div>
);

export default Layout;
