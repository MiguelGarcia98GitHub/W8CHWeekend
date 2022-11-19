import { NextFunction, Request, Response } from 'express';
import { request } from 'https';
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
    test('When when we use getAll, then it should give us an error', async () => {
        RobotsDbOps.prototype.getAll = jest.fn().mockRejectedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);
        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        const response = await robotsController.getAll(
            req as Request,
            resp as Response,
            next
        );
        expect(response).toBe(undefined);
    });
    test('When when we use get, then it should give us a robot item', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.get = jest
            .fn()
            .mockResolvedValue({ ...mockRobot });
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.get(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({
            ...mockRobot,
        });
    });
    test('When when we use get, then it should give us an error', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.get = jest.fn().mockRejectedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        const response = await robotsController.get(
            req as Request,
            resp as Response,
            next
        );
        expect(response).toBe(undefined);
    });

    test('When when we use post, then it should create us a robot item', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.post = jest
            .fn()
            .mockResolvedValue({ ...mockRobot });
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            body: { ...mockRobot },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.post(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({
            ...mockRobot,
        });
    });
    test('When when we use post, then it should give us an error', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.post = jest.fn().mockRejectedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            body: { ...mockRobot },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        const response = await robotsController.post(
            req as Request,
            resp as Response,
            next
        );
        expect(response).toBe(undefined);
    });
    test('When when we use patch, then it should modify a robot item', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.patch = jest
            .fn()
            .mockResolvedValue({ ...mockRobot, speed: '15' });
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
            body: { ...mockRobot, speed: '15' },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.patch(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({
            ...mockRobot,
            speed: '15',
        });
    });
    test('When when we use patch, then it should give us an error', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.patch = jest.fn().mockRejectedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
            body: { ...mockRobot, speed: '15' },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        const response = await robotsController.patch(
            req as Request,
            resp as Response,
            next
        );
        expect(response).toBe(undefined);
    });
    test('When when we use delete, then it should delete a robot item', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.delete = jest.fn().mockResolvedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.delete(req as Request, resp as Response, next);
        expect(resp.json).toHaveBeenCalledWith({});
    });
    test('When when we use delete, then it should give us an error', async () => {
        const mockRobot = {
            id: '50',
            name: 'MANOLOBOTTEST',
            resistance: '9',
            speed: '9',
        };
        RobotsDbOps.prototype.delete = jest.fn().mockRejectedValue({});
        const dbops = new RobotsDbOps();
        const robotsController = new RobotsController(dbops);

        const req: Partial<Request> = {
            ...request,
            params: {
                id: '50',
            },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        const response = await robotsController.delete(
            req as Request,
            resp as Response,
            next
        );
        expect(response).toBe(undefined);
    });
});
