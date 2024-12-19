import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

interface HttpError extends Error { statusCode?: number; }

const errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    
    if(!err.message) {
        return next();
    }

    console.log('MASUKK');
    console.log(err)
    
    const statusCode = err.statusCode || 200;
    const message = err.message || 'Something went wrong';

    res.status(statusCode).json({
        status: statusCode,
        message
    })
}

export default errorHandler;