'use client';

import { usePathname } from 'next/navigation';
import { IoLanguage } from 'react-icons/io5';

const LanguageSwithButton = () => {
  const pathName = usePathname();
  const onClickToggleLanguage = () => {
    console.log(pathName);
  };

  return (
    <button type='button' onClick={onClickToggleLanguage} aria-label='Switch language'>
      <IoLanguage />
    </button>
  );
};

export default LanguageSwithButton;
