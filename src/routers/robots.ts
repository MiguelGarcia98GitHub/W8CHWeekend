import { Router } from 'express';
import { logged, who } from '../middlewares/interceptors.js';
import { RobotController } from '../controllers/robots.js';
import { UserRepository } from '../dbops/user.js';
import { RobotRepository } from '../dbops/robotsdbops.js';

export const robotsRouter = Router();

const controller = new RobotController(
    new RobotRepository(),
    new UserRepository()
);

robotsRouter.get('/', controller.getAll.bind(controller));
robotsRouter.get('/:id', controller.get.bind(controller));
robotsRouter.post('/', logged, controller.post.bind(controller));
robotsRouter.patch('/:id', logged, who, controller.patch.bind(controller));
robotsRouter.delete('/:id', logged, who, controller.delete.bind(controller));
