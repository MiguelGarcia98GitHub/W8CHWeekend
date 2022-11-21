import { Router } from 'express';
import { RobotsController } from '../controllers/robots.js';
import { RobotsDbOps } from '../dbops/robotsdbops.js';
import { logged } from '../middlewares/interceptors.js';

export const robotsRouter = Router();

const controller = new RobotsController(new RobotsDbOps());

robotsRouter.get('/', controller.getAll.bind(controller));
robotsRouter.get('/:id', logged, controller.get.bind(controller));
robotsRouter.post('/', logged, controller.post.bind(controller));
robotsRouter.post('/:id', logged, controller.post.bind(controller));
robotsRouter.patch('/:id', logged, controller.patch.bind(controller));
robotsRouter.delete('/:id', logged, controller.delete.bind(controller));
