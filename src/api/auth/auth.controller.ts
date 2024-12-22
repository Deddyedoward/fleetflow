import { Request, Response, NextFunction } from 'express';
import AuthService from './auth.service';
import { EmailService } from '../email';
import { emailQueue } from '../../config/bullmq';

class AuthController {
    private authService: AuthService;
    private emailService: EmailService;

    constructor(authService: AuthService, emailService: EmailService) {
        this.authService = authService;
        this.emailService = emailService;
    }

    public signIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.authService.verifyAuth(req.body);
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    }

    public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const users = await this.authService.createAuth(req.body)
            res.status(200).json(users);
        } catch (err){
            next(err);
        }
    }

    public forgotPassword = (req: Request, res: Response): void => {
        res.status(200).json({ message: 'forgot password' });
    }

    public resetPassword = (req: Request, res: Response): void => {
        res.status(200).json({ message: 'reset password' });
    }
}

export default AuthController;
