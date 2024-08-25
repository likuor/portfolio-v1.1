import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { workSlider } from '@/constants/data/workData';

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
              <div className='flex items-center justify-center relative overflow-hidden group'>
                {/* image */}
                <Image src={image.path} width={500} height={300} alt='project image' />
                {/* overlay gradient */}
                <Link href={image.url} rel='noopener noreferrer' target='_blank'>
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#236a78] to-[#0CC7AB] opacity-0 group-hover:opacity-80 transition-all duration-700' />
                </Link>
                {/* title */}
                <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                  <div className='flex flex-col items-center gap-y-2 text-[13px] lg:text-[18px] tracking-[0.2em]'>
                    <span className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>
                      {image.title}
                    </span>
                    <span className='flex gap-x-1 lg:gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                      {image.teck.map((teck) => (
                        <span key={teck.id}>{teck.icon}</span>
                      ))}
                    </span>
                    <span className='absolute bottom-[-30px] lg:bottom-[-50px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300'>
                      {image.gitUrl && (
                        <Link href={image.gitUrl} rel='noopener noreferrer' target='_blank'>
                          <FaGithub />
                        </Link>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
