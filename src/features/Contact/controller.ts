import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { contactSchema } from '@/features/Contact/schema/contactSchema';

export type FormProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactController = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ mode: 'onChange', resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FormProps) => {
    try {
      const result = await emailjs.send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        data,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      );
      if (result.status !== 200) return { data: 'something wrong' };
      return router.reload();
    } catch (error) {
      return error;
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default ContactController;
