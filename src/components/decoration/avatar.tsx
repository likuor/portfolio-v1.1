import Image from 'next/image';

// TODO change image
const Avatar = () => (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image
      src='/images/dummy/avatar.png'
      width={737}
      height={678}
      alt='avatar image'
      className='translate-z-0 w-full h-full'
    />
  </div>
);

export default Avatar;
