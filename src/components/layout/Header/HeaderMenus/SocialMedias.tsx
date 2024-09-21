import Link from 'next/link';
import { CgFileDocument } from 'react-icons/cg';
import { RiGithubLine, RiLinkedinBoxLine, RiMediumLine } from 'react-icons/ri';

const SocialMedias = () => {
  const socialMediasData = [
    {
      id: 1,
      name: 'Facebook',
      icon: <RiGithubLine />,
      url: 'https://github.com/likuor',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: <RiLinkedinBoxLine />,
      url: 'https://www.linkedin.com/in/kokisakai/',
    },
    {
      id: 3,
      name: 'Instagram',
      icon: <CgFileDocument />,
      url: 'https://drive.google.com/file/d/10TRSxwjssjDo5fO7eLCr25HSCFUDOPYp/view?usp=sharing',
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: <RiMediumLine />,
      url: 'https://medium.com/@le_pereza',
    },
  ];

  return (
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
};

export default SocialMedias;
