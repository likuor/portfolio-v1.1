import Link from 'next/link';
import { RiGithubLine, RiLinkedinBoxLine, RiFacebookLine } from 'react-icons/ri';

const SocialMedias = () => (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link
      href='https://github.com/likuor'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <RiGithubLine />
    </Link>
    <Link
      href='https://www.linkedin.com/in/kokisakai/'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <RiLinkedinBoxLine />
    </Link>
    <Link
      href='https://www.facebook.com/sakai.kouki.1/'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <RiFacebookLine />
    </Link>
  </div>
);

export default SocialMedias;
