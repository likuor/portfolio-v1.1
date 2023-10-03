import sora from '@/constants/font';

import Header from './Header';
import Navbar from './Navbar';
import { LayoutProps } from './type';

const Layout = ({ children }: LayoutProps) => (
  <div
    className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
  >
    <Navbar />
    <Header />
    {children}
  </div>
);

export default Layout;
