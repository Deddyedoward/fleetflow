import { Request, Response, NextFunction } from "express"
import connection from "../../config/redis";

const idempotency = async (req: Request, res: Response, next: NextFunction) => {
    let idempotencyKey = req.headers['idempotency-key'] as string;

    if(!idempotencyKey) {
        return next();
    }
    
    const getIdempotencyKey = await connection.get(idempotencyKey);

    if(getIdempotencyKey) {
        const body = JSON.parse(getIdempotencyKey);
        res.status(200).json({ token: body, expiresIn: '3600' });
        return;
    }

    next();
}


export default idempotency;