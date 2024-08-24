import { ReactNode } from 'react';

import sora from '@/constants/font';

import Header from './Header';
import Navbar from './Navbar';
import TopImg from './TopImage';

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div
    className={`page bg-bgLayout text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
  >
    <TopImg />
    <Navbar />
    <Header />
    {children}
  </div>
);

export default Layout;
