import { Router } from 'express';
import { RobotsController } from '../controllers/robots.js';
import { RobotsDbOps } from '../dbops/robotsdbops.js';

export const robotsRouter = Router();

const controller = new RobotsController(new RobotsDbOps());

robotsRouter.get('/', controller.getAll.bind(controller));
robotsRouter.get('/:id', controller.get.bind(controller));
robotsRouter.post('/', controller.post.bind(controller));
robotsRouter.patch('/:id', controller.patch.bind(controller));
robotsRouter.delete('/:id', controller.delete.bind(controller));
