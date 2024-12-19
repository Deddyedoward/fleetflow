import { Request, Response, NextFunction } from 'express';
import AuthService from '@services/core/AuthService';

class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public signIn = async (req: Request, res: Response): Promise<void> => {
        const users = await this.authService.verifyAuth(req.body);
        res.status(200).json(users);
    };

    public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.authService.createAuth(req.body)
            res.status(200).json(users);
        } catch (err){
            next(err);
        }
    };

    public forgotPassword = (req: Request, res: Response): void => {
        res.status(200).json({ message: 'forgot password' });
    };

    public resetPassword = (req: Request, res: Response): void => {
        res.status(200).json({ message: 'reset password' });
    };
}

export default AuthController;
