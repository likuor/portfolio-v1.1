'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiEnvelope, HiHome, HiUser, HiViewColumns } from 'react-icons/hi2';

import { PAGES } from '@/constants';

type Props = {
  lang: string;
};

const Navbar = ({ lang }: Props) => {
  const pathname = usePathname();
  const navBarMenu = [
    { id: 1, name: 'Home', path: PAGES.HOME, icon: <HiHome /> },
    { id: 2, name: 'About', path: PAGES.ABOUT, icon: <HiUser /> },
    { id: 3, name: 'Work', path: PAGES.WORK, icon: <HiViewColumns /> },
    {
      id: 4,
      name: 'Contact',
      path: PAGES.CONTACT,
      icon: <HiEnvelope />,
    },
  ];

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div
        className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-8 bg-white/10
      backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full'
      >
        {navBarMenu.map((link) => {
          const currentPath = pathname.replace(/^\/(en|ja)/, '') || '/';
          return (
            <Link
              className={`${
                link.path === currentPath && 'text-accent'
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={`/${lang}${link.path}`}
              key={link.id}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold'>{link.name}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2' />
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
