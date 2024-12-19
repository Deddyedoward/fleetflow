import { Router } from 'express';
import AuthService from '@services/core/AuthService';
import UserRepository from '@repositories/UserRepository';
import validateSchema from '@middlewares/validation';
import AuthController from '@controllers/AuthController';
import { authSignInSchema } from '@validators/authValidator';

const authRoute = Router();

// defines all dependencies
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

/**
 * --------------------------------------------------------------
 * Defines all routes for Auth
 * --------------------------------------------------------------
 */
authRoute.post(
    '/signin',
    validateSchema(authSignInSchema),
    authController.signIn,
);
authRoute.post('/signup', authController.signUp);
authRoute.get('/forgot-password', authController.signIn);
authRoute.get('/reset-password', authController.signIn);

export default authRoute;
