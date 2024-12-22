import { Router } from 'express';
import { validateSchema } from '../../shared';
import { UserRepository } from '../user';
import { EmailService } from '../email';
import AuthService from './auth.service';
import AuthController from './auth.controller';
import { authSignInSchema, authSignUpSchema } from './auth.validator';

const authRoute = Router();

// defines all dependencies
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const emailService = new EmailService();
const authController = new AuthController(authService, emailService);

// defines all routes
authRoute.post(
    '/signin',
    validateSchema(authSignInSchema),
    authController.signIn,
);
authRoute.post(
    '/signup', 
    validateSchema(authSignUpSchema),
    authController.signUp
);
authRoute.get(
    '/forgot-password', 
    authController.signIn
);
authRoute.get(
    '/reset-password', 
    authController.signIn
);

export default authRoute;
