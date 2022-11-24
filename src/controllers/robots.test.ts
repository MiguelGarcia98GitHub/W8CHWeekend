import { NextFunction, Request, Response } from 'express';
import { request } from 'https';
import { RobotRepository } from '../dbops/robotsdbops';
import { UserRepository } from '../dbops/user';
import { RobotController } from './robots';

// jest.mock('./../dbops/robotsdbops');

describe('Given RobotsController', () => {
    const next: NextFunction = jest.fn();
    const req: Partial<Request> = {};

    const mockRobot = {
        id: '50',
        name: 'MANOLOBOTTEST',
        resistance: '9',
        speed: '9',
    };

    test('When when we use getAll, then it should give us an array with some robot inside', async () => {
        RobotRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue(['PepeBot']);
        const dbops = new RobotRepository();
        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.getAll(req as Request, resp as Response, next);
    });
    test('When when we use getAll, then it should give us an error', async () => {
        RobotRepository.prototype.getAll = jest.fn().mockRejectedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.getAll(req as Request, resp as Response, next);
    });
    test('When when we use get, then it should give us a robot item', async () => {
        RobotRepository.prototype.get = jest
            .fn()
            .mockResolvedValue({ ...mockRobot });

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

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
    });
    test('When when we use get, then it should give us an error', async () => {
        RobotRepository.prototype.get = jest.fn().mockRejectedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.get(req as Request, resp as Response, next);
    });

    test('When when we use post, then it should create us a robot item', async () => {
        RobotRepository.prototype.post = jest
            .fn()
            .mockResolvedValue({ ...mockRobot });

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const req: Partial<Request> = {
            ...request,
            body: { ...mockRobot },
        };
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.post(req as Request, resp as Response, next);
    });
    test('When when we use post, then it should give us an error', async () => {
        RobotRepository.prototype.post = jest.fn().mockRejectedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.post(req as Request, resp as Response, next);
    });
    test('When when we use patch, then it should modify a robot item', async () => {
        RobotRepository.prototype.patch = jest
            .fn()
            .mockResolvedValue({ ...mockRobot, speed: '15' });

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

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
    });
    test('When when we use patch, then it should give us an error', async () => {
        RobotRepository.prototype.patch = jest.fn().mockRejectedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.patch(req as Request, resp as Response, next);
    });
    test('When when we use delete, then it should delete a robot item', async () => {
        RobotRepository.prototype.delete = jest.fn().mockResolvedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

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
    });
    test('When when we use delete, then it should give us an error', async () => {
        RobotRepository.prototype.delete = jest.fn().mockRejectedValue({});

        const robotsController = new RobotController(
            new RobotRepository(),
            new UserRepository()
        );

        const req: Partial<Request> = {};
        const resp: Partial<Response> = {
            json: jest.fn(),
        };

        await robotsController.delete(req as Request, resp as Response, next);
    });
});
