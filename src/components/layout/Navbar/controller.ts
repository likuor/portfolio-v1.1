'use client';

import { usePathname } from 'next/navigation';

const NavbarController = () => {
  const pathname = usePathname;

  return { pathname };
};

export default NavbarController;
