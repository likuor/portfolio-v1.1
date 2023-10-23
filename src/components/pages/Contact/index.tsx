import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';

import { fadeIn } from '@/constants/motion/variants';

const Contact = () => {
  type FormType = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ mode: 'onChange' });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] f'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Get in Touch<span className='text-accent'>.</span>
          </motion.h2>

          {/* form */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <form action='' onSubmit={handleSubmit(onSubmit)} className=' flex-col w-full'>
              <input
                id='name'
                type='text'
                placeholder='Name'
                className='input'
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Over 2 letters of your name is required' },
                })}
              />
              <span>{errors.name?.message as ReactNode}</span>
              <input
                id='email'
                type='email'
                placeholder='Email'
                className='input'
                {...register('email', { required: 'Email is required' })}
              />
              <span>{errors.email?.message as ReactNode}</span>
              <input
                id='subject'
                type='text'
                placeholder='Subject'
                className='input'
                {...register('subject', { required: 'Subject is required' })}
              />
              <span>{errors.subject?.message as ReactNode}</span>
              <textarea
                id='message'
                placeholder='Message'
                className='textarea'
                {...register('message', { required: 'Message is required' })}
              />
              <span>{errors.message?.message as ReactNode}</span>
              <button
                type='submit'
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              >
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Let&apos;s chat
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>

    // <div className='h-full bg-primary/30'>
    //   <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
    //     {/* text & form */}
    //     <div className='flex flex-col w-full max-w-[700px]'>
    //       {/* text */}
    //       <motion.h2
    //         variants={fadeIn('up', 0.2)}
    //         initial='hidden'
    //         animate='show'
    //         exit='hidden'
    //         className='h2 text-center mb-12'
    //       >
    //         Get in <span className='text-accent'>Touch.</span>
    //       </motion.h2>
    //       {/* form */}
    //       <motion.form
    //         variants={fadeIn('up', 0.4)}
    //         initial='hidden'
    //         animate='show'
    //         exit='hidden'
    //         className='flex-1 flex flex-col gap-6 w-full mx-auto'
    //       >
    //         {/* input group */}
    //         <div className='flex gap-x-6 w-full'>
    //           <input type='text' placeholder='name' className='input' />
    //           <input type='text' placeholder='email' className='input' />
    //         </div>
    //         <input type='text' placeholder='subject' className='input' />
    //         <textarea placeholder='message' className='textarea' />
    //         <button
    //           type='button'
    //           className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
    //         >
    //           <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
    //             Let&apos;s chat
    //           </span>
    //           <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
    //         </button>
    //       </motion.form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
