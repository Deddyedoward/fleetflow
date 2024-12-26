import { z } from 'zod';

export const createVehicleSchema = z.object({
    vehicle_name: z.string().min(1, 'Firstname is required'),
    vehicle_type: z.string().min(1, 'Lastname is required'),
    fuel_type: z.string().min(1, 'Username is required'),
    license_plate: z.string().min(6, 'Password must be at least 6 characters long'),
    group: z.string().min(6, 'Password must be at least 6 characters long'),
    vin: z.string().min(6, 'Password must be at least 6 characters long'),
    year: z.string().min(4, 'Password must be at least 4 characters long'),
})

export type CreateVehicleBody = z.infer<typeof createVehicleSchema> & {
    status: string
};
