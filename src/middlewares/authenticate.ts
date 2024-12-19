import { Request, Response, NextFunction } from "express";
import { TokenNotFoundException } from "@exceptions/TokenNotFoundException";
import tokenUtil from "@utils/tokenUtil";

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    
    if(!token) {
        throw new TokenNotFoundException();
    }

    const verify = tokenUtil.validateToken(token);

    if(!verify) {
        res.status(403).json({ message: 'Token is not match...'})
        return;
    }

    next();
}

export default authenticateToken;