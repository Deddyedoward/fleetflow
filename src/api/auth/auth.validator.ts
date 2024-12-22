import { z } from 'zod';

export const authSignInSchema = z.object({
    email: z.string().min(1, 'Username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const authSignUpSchema = z.object({
    first_name: z.string().min(1, 'Firstname is required'),
    last_name: z.string().min(1, 'Lastname is required'),
    email: z.string().min(1, 'Username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
})

export type AuthSignInBody = z.infer<typeof authSignInSchema>;
export type AuthSignUpBody = z.infer<typeof authSignUpSchema>;
