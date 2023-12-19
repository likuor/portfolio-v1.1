import Link from 'next/link';
import { CgFileDocument } from 'react-icons/cg';
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
    <Link
      href='https://drive.google.com/file/d/1UnKjMkmt9N9gZawXS_Fj7Io85dkFV4jJ/view?usp=sharing'
      className='hover:text-accent transition-all duration-300'
      rel='noopener noreferrer'
      target='_blank'
    >
      <CgFileDocument />
    </Link>
  </div>
);

export default SocialMedias;
