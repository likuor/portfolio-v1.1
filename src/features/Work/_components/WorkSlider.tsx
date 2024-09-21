import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiThreedotjs,
  SiExpress,
  SiNextdotjs,
  SiDocker,
  SiAmazonaws,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiStyledcomponents,
} from 'react-icons/si';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const WorkSlider = () => {
  const workSlider = useMemo(
    () => ({
      slides: [
        {
          id: 1,
          images: [
            {
              id: 1,
              title: 'luluti',
              path: '/images/works/luluti.png',
              url: 'https://luluti.jp/?gad=1&gclid=Cj0KCQjwm66pBhDQARIsALIR2zAI69HFnuHbwVbjeeiV58TIy15ffxPqmmFToRYVj7JOBZnPnydQ1A0aAlScEALw_wcB',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                { id: 3, icon: <SiNextdotjs /> },
                {
                  id: 4,
                  icon: <SiTailwindcss />,
                },
                { id: 5, icon: <SiDocker /> },
              ],
            },
            {
              id: 2,
              title: 'mummar',
              path: '/images/works/mummar.png',
              url: 'https://mummar.com/',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                { id: 3, icon: <SiNextdotjs /> },
                {
                  id: 4,
                  icon: <SiTailwindcss />,
                },
                { id: 5, icon: <SiDocker /> },
              ],
            },
            {
              id: 3,
              title: 'Social Media',
              path: '/images/works/Social-media.png',
              url: 'https://next-sns-alpha.vercel.app/',
              gitUrl: 'https://github.com/likuor/next-sns-client',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                { id: 3, icon: <SiNextdotjs /> },
                {
                  id: 4,
                  icon: <SiTailwindcss />,
                },
                {
                  id: 5,
                  icon: <SiNodedotjs />,
                },
                {
                  id: 6,
                  icon: <SiExpress />,
                },
                {
                  id: 7,
                  icon: <SiPrisma />,
                },
                {
                  id: 8,
                  icon: <SiSupabase />,
                },
              ],
            },
            {
              id: 4,
              title: 'Supabase Blog',
              path: '/images/works/Supabase-blog.png',
              url: 'https://blog-supabase-five.vercel.app/',
              gitUrl: 'https://github.com/likuor/blog-supabase',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                { id: 3, icon: <SiNextdotjs /> },
                {
                  id: 4,
                  icon: <SiTailwindcss />,
                },
                {
                  id: 5,
                  icon: <SiPrisma />,
                },
                {
                  id: 6,
                  icon: <SiSupabase />,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              title: 'Portfolio-v2',
              path: '/images/works/portfoliov2.png',
              url: 'https://portfolio-v1-1-dev.vercel.app/work',
              gitUrl: 'https://github.com/likuor/portfolio-v1.1',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                { id: 3, icon: <SiNextdotjs /> },
                {
                  id: 4,
                  icon: <SiTailwindcss />,
                },
                {
                  id: 5,
                  icon: <SiThreedotjs />,
                },
              ],
            },
            {
              id: 2,
              title: 'Chillip',
              path: '/images/works/Chillip.png',
              url: 'https://main.d1q845p9ygn1yh.amplifyapp.com/login',
              gitUrl: 'https://github.com/tenmusu007/matchingapp-frontend',
              tech: [
                { id: 1, icon: <SiJavascript /> },
                { id: 2, icon: <FaReact /> },
                {
                  id: 3,
                  icon: <SiMui />,
                },
                {
                  id: 4,
                  icon: <SiNodedotjs />,
                },
                {
                  id: 5,
                  icon: <SiExpress />,
                },
                {
                  id: 6,
                  icon: <SiMongodb />,
                },
                {
                  id: 7,
                  icon: <SiAmazonaws />,
                },
              ],
            },
            {
              id: 3,
              title: 'Mongolog',
              path: '/images/works/blogapp.png',
              url: 'https://blogapp-bykoki.onrender.com',
              gitUrl: 'https://github.com/likuor/blogapp',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                {
                  id: 3,
                  icon: <SiBootstrap />,
                },
                {
                  id: 4,
                  icon: <SiNodedotjs />,
                },
                {
                  id: 5,
                  icon: <SiExpress />,
                },
                {
                  id: 6,
                  icon: <SiMongodb />,
                },
              ],
            },
            {
              id: 4,
              title: 'Portfolio-v1',
              path: '/images/works/portfolio.png',
              url: 'https://kokisakai.netlify.app/',
              gitUrl: 'https://github.com/likuor/portfolio-ts',
              tech: [
                { id: 1, icon: <SiTypescript /> },
                { id: 2, icon: <FaReact /> },
                {
                  id: 3,
                  icon: <SiStyledcomponents />,
                },
                {
                  id: 4,
                  icon: <SiThreedotjs />,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              title: 'Katsuraba',
              path: '/images/works/Katsuraba_kitchen.png',
              url: 'https://katsuraba-kitchien.netlify.app/',
              gitUrl: 'https://github.com/likuor/katsuraba',
              tech: [
                { id: 1, icon: <SiJavascript /> },
                { id: 2, icon: <FaReact /> },
                {
                  id: 3,
                  icon: <SiTailwindcss />,
                },
              ],
            },
            {
              id: 2,
              title: 'Movie App',
              path: '/images/works/movie_app.png',
              url: 'https://movieapp-bykoki.netlify.app/',
              gitUrl: 'https://github.com/likuor/movieapp',
              tech: [
                { id: 1, icon: <SiJavascript /> },
                { id: 2, icon: <FaReact /> },
                {
                  id: 3,
                  icon: <SiTailwindcss />,
                },
              ],
            },
          ],
        },
      ],
    }),
    []
  );

  return (
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
                        {image.tech.map((tech) => (
                          <span key={tech.id}>{tech.icon}</span>
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
};

export default WorkSlider;
