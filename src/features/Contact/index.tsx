'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';
import { fadeIn } from '@/constants/motion/variants';

import ContactController from './controller';

type Props = {
  lang: string;
};

const Contact = ({ lang }: Props) => {
  const { register, handleSubmit, errors, onSubmit } = ContactController();
  const { t } = useTranslation(lang);

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-4'
          >
            {t('contact.titlePrimary')}
            <span className='text-accent'>{t('contact.titleAccent')}</span>
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
            <form action='' onSubmit={handleSubmit(onSubmit)} className='flex-col w-full space-y-4'>
              <input
                id='name'
                type='text'
                placeholder='Name'
                className='input'
                {...register('name')}
              />
              <span className='error-message'>{errors.name?.message as ReactNode}</span>
              <input
                id='email'
                type='email'
                placeholder='Email'
                className='input'
                {...register('email')}
              />
              <span className='error-message'>{errors.email?.message as ReactNode}</span>
              <input
                id='subject'
                type='text'
                placeholder='Subject'
                className='input'
                {...register('subject')}
              />
              <span className='error-message'>{errors.subject?.message as ReactNode}</span>
              <textarea
                id='message'
                placeholder='Message'
                className='textarea'
                {...register('message')}
              />
              <span className='error-message'>{errors.message?.message as ReactNode}</span>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
                >
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Let&apos;s chat
                  </span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
