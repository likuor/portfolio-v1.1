// next image
import Image from 'next/image';

const TopImg = () => (
  <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
    <Image src='/icons/topImage.png' width={100} height={100} alt='TopImage' />
  </div>
);

export default TopImg;
