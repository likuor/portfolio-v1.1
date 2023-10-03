import { motion } from 'framer-motion';

import { fadeIn } from '@/constants/motion/variants';

const Home = () => (
  <div className='bg-primary/60 h-full'>
    {/* text */}
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
          Koki Sakai <br />
          <span className='text-accent'>Full-stack Developer</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum quam reprehenderit
          vero, tenetur voluptatem nulla aut aspernatur dolores ut.
        </motion.p>
      </div>
    </div>
  </div>
);

export default Home;
