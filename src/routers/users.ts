import { Router } from 'express';
import { UserController } from '../controllers/user.js';
import { RobotRepository } from '../dbops/robotsdbops.js';
import { UserRepository } from '../dbops/user.js';

export const usersRouter = Router();

const controller = new UserController(
    new UserRepository(),
    new RobotRepository()
);

usersRouter.post('/register', controller.register.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
