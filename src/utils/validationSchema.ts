import { z } from 'zod';

export const validationSchema = z.object({
  name: z.string().min(2, 'Over 2 letters of your name is required'),
  email: z.string().min(1).email('Email is not proper'),
  subject: z
    .string()
    .min(4, 'Subject is required')
    .max(50, 'Under 50 letters of the suject is required'),
  message: z
    .string()
    .min(4, 'Message is required')
    .max(255, 'Under 255 letters of the suject is required'),
});
