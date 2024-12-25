import { Router } from 'express';
import UserRepository from './user.repository';
import UserController from './user.controller';
import UserService from './user.service';

const userRoute = Router();

// defines all dependencies
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// defines all routes
userRoute.get(
    '/',
    userController.getProfile,
);

export default userRoute;
