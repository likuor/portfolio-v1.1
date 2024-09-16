'use client';

import { motion } from 'framer-motion';

import Circle from '@/components/decoration/Circle';
import { useTranslation } from '@/constants/i18n/client';
import { fadeIn } from '@/constants/motion/variants';
import WorkSlider from '@/features/Work/_components/WorkSlider';

import Fire from './_components/Fire';

type Props = {
  lang: string;
};

const Work = ({ lang }: Props) => {
  const { t } = useTranslation(lang);

  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circle />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              {t('work.titlePrimary')}
              <span className='text-accent'>{t('work.titleAccent')}</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              {t('work.subTitle')}
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%] z-20'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Fire />
    </div>
  );
};

export default Work;
