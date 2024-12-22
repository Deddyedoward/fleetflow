import { Request, Response, NextFunction } from "express";
import { tokenUtil } from "../../api/auth";
import { TokenNotFoundException } from "../../api/auth/exceptions/token-not-found.exception";

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