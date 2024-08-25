import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectButton = () => (
  <div className='mx-auto xl:mx-0 z-10'>
    <Link
      href='/work'
      className='relative w-[166px] h-[166px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
    >
      <Image
        src='/images/roundedText.png'
        width={141}
        height={148}
        alt='project button'
        className='animate-spin-slow w-full h-full max-w-[126px] max-h-[133px] md:max-w-[141px] md:max-h-[148px]'
      />
      <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
    </Link>
  </div>
);

export default ProjectButton;
