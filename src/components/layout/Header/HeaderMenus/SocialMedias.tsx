import Link from 'next/link';

import { socialMediasData } from '@/constants/data/socialMediaData';

const SocialMedias = () => (
  <div className='flex items-center gap-x-5 text-lg'>
    {socialMediasData.map((socialMedia) => (
      <Link
        key={socialMedia.id}
        className='hover:text-accent transition-all duration-300'
        href={socialMedia.url}
        rel='noopener noreferrer'
        target='_blank'
      >
        {socialMedia.icon}
      </Link>
    ))}
  </div>
);

export default SocialMedias;
