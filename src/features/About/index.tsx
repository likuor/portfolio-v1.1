import { motion } from 'framer-motion';
import CountUp from 'react-countup';

import Circle from '@/components/decoration/circle';
import { aboutTabs } from '@/constants/data/aboutData';
import { fadeIn } from '@/constants/motion/variants';
import Avatar from '@/features/About/_components/avatar';

import AboutController from './controller';

const About = () => {
  const { selectedTab, yearsDevExperience, currentData, handleClick } = AboutController();

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circle />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 left-[55%] h-[50%] z-20'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            {/* Passionately developing <span className='text-accent'>creative</span> apps. */}
            Let me <span className='text-accent'>solve</span> problems
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            As a developer passionate about creating custom-built software, I prioritize
            functionality and convenience. I take pride in building solutions that help people in
            their daily lives.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-sub mb-2'>
                  <CountUp start={0} end={yearsDevExperience} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-sub mb-2'>
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-sub mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutTabs.map((tab) => (
              <div
                key={tab.id}
                role='button'
                tabIndex={0}
                className={`${
                  selectedTab === tab.title &&
                  'text-sub after:w-[100%] after:bg-sub after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => {
                  handleClick(tab.title);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleClick(tab.title);
                  }
                }}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {currentData.map((aboutItem) => (
              <div
                key={aboutItem.id}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                {/* title */}
                <div className='font-light mb-2 md:mb-0'>
                  <span>
                    {aboutItem.title} - {aboutItem.period}
                  </span>
                  <br />
                  <span>{aboutItem.schoolName}</span>
                </div>
                {/* icons */}
                <div className='flex gap-x-4'>
                  {aboutItem.icons?.map((icon) => (
                    <div key={icon.id} className='text-2xl text-white'>
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
