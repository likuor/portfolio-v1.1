'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';

import { defaultLanguage, i18nConfig } from '@/constants/i18n/settings';

const LanguageSwithButton = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const pathName = usePathname();
  const router = useRouter();
  const onClickToggleLanguage = () => {
    const newLocale = currentLocale === i18nConfig.defaultLocale ? 'ja' : defaultLanguage;
    router.push(
      pathName.startsWith(`/${currentLocale}`)
        ? pathName.replace(`/${currentLocale}`, `/${newLocale}`)
        : `/${newLocale}${pathName}`
    );
    router.refresh();
  };

  return (
    <button
      type='button'
      onClick={onClickToggleLanguage}
      aria-label='Switch language'
      className='hover:text-accent transition-all duration-300'
    >
      <IoLanguage />
    </button>
  );
};

export default LanguageSwithButton;
