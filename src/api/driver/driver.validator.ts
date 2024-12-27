import { z } from 'zod';

export const createDriverSchema = z.object({
    first_name: z.string().min(1, 'Firstname is required'),
    last_name: z.string().min(1, 'Lastname is required'),
    email: z.string().min(1, 'Username is required'),
    phone_number: z.string().min(6, 'Password must be at least 6 characters long'),
    license_number: z.string().min(6, 'Password must be at least 6 characters long'),
    date_birth: z.string().min(6, 'Password must be at least 6 characters long'),
    hire_date: z.string().min(4, 'Password must be at least 4 characters long'),
    address: z.string().min(4, 'Password must be at least 4 characters long'),
})

export type CreateDriverBody = z.infer<typeof createDriverSchema> & {
    status: string
};

export type UpdateDriverBody = z.infer<typeof createDriverSchema>;