import { NextFunction, Request, Response } from 'express';
import { RobotsDbOps } from './../dbops/robotsdbops';
import { RobotsController } from './robots';

jest.mock('./../dbops/robotsdbops');

describe('Given RobotsController', () => {
    const next: NextFunction = jest.fn();
    test('When when we use getAll, then it should give us an array with some robot inside', async () => {
        RobotsDbOps.prototype.getAll = jest.fn().mockResolvedValue(['PepeBot']);
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);
        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.getAll(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({ robots: ['PepeBot'] });
    });
    // GET TEST -- IN PROGRESS
    // test('When when we use get, then it should give us a robot item', async () => {
    //     RobotsDbOps.prototype.get = jest.fn().mockResolvedValue('PepeBot');
    //     const dbops = new RobotsDbOps();
    //     const robotsController = new RobotsController(dbops);
    //     const req: Partial<Request> = {
    //         robot: 'PepeBot',
    //     };
    //     const resp: Partial<Response> = {
    //         json: jest.fn(),
    //     };

    //     await robotsController.get(req.id as Request, resp as Response, next);
    //     expect(resp.json).toHaveBeenCalledWith({ robot: 'PepeBot' });
    // });
});
