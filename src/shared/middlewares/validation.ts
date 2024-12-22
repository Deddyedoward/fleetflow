import { ZodError, ZodSchema } from 'zod';

import { NextFunction, Request, Response } from 'express';

const validateSchema = (schema: ZodSchema<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                res.status(400).json({ error: err.errors });
            } else {
                next(err);
            }
        }
    };
};

export default validateSchema;
