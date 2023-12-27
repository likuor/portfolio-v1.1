import Link from 'next/link';
import { CgFileDocument } from 'react-icons/cg';
import { RiGithubLine, RiLinkedinBoxLine, RiMediumLine } from 'react-icons/ri';

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
      href='https://drive.google.com/file/d/10TRSxwjssjDo5fO7eLCr25HSCFUDOPYp/view?usp=sharing'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <CgFileDocument />
    </Link>
    <Link
      href='https://medium.com/@le_pereza'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <RiMediumLine />
    </Link>
  </div>
);

export default SocialMedias;
