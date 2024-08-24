import { motion } from 'framer-motion';

import Hero3D from '@/components/pages/Home/_components/3d';
import ParticlesContainer from '@/components/pages/Home/_components/Particles';
import ProjectButton from '@/components/pages/Home/_components/ProjectButton';
import { fadeIn } from '@/constants/motion/variants';

const Home = () => (
  <div className='bg-primary/20 h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1'
        >
          From Ideas <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-accent to-sub'>
            to Codes
          </span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
        >
          Full-stack developer with 2+ years of experience in advanced web technologies.
          Specializing in Javascript/Typescript, Next.js, React, Node.js, AWS, and building apps of
          AI robots, EC websites.
        </motion.p>
        {/* button */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectButton />
        </div>
        <motion.div
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex'
        >
          <ProjectButton />
        </motion.div>
      </div>
    </div>

    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className='bg-none xl:bg-bgHome xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0' />
      <ParticlesContainer />
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
      >
        <Hero3D />
      </motion.div>
    </div>
  </div>
);

export default Home;
