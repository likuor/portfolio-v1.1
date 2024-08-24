import Image from 'next/image';

const Fire = () => (
  <div className='absolute -left-24 bottom-16 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
    <Image
      src='/images/fireCircle.png'
      width={260}
      height={200}
      className='w-full h-full'
      alt='fire image'
    />
  </div>
);

export default Fire;
