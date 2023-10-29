import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { workSlider } from '@/constants/workData';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const WorkSlider = () => (
  <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
  >
    {workSlider.slides.map((slide) => (
      <SwiperSlide key={slide.id}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image) => (
            <div
              className='relative rounded-lg overflow-hidden flex items-center justify-center group'
              key={image.id}
            >
              <Link href={image.url} rel='noopener noreferrer' target='_blank'>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt='project image' />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#236a78] to-[#0CC7AB] opacity-0 group-hover:opacity-80 transition-all duration-700' />
                  {/* title */}
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='delay-100'>CHECK</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                        {image.title}
                      </div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
