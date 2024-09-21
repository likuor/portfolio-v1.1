'use client';

import LanguageSwithButton from './LanguageSwithButton';
import SocialMedias from './SocialMedias';

const HeaderMenus = () => (
  <div className='flex items-center gap-x-5 text-lg'>
    <LanguageSwithButton />
    <SocialMedias />
  </div>
);

export default HeaderMenus;
