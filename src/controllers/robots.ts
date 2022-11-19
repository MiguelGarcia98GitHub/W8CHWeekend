import { NextFunction, Request, Response } from 'express';
import { DataInterface } from '../dbops/dataInterface.js';
import { HTTPError } from '../errors/error.js';
import { Robot } from '../interfaces/robot.js';

export class RobotsController {
    constructor(public dbops: DataInterface<Robot>) {
        //
    }

    async getAll(req: Request, resp: Response, next: NextFunction) {
        try {
            const robots = await this.dbops.getAll();
            resp.json({ robots });
        } catch (error) {
            const httpError503 = new HTTPError(
                503,
                'Service unavailable',
                (error as Error).message
            );
            next(httpError503);
        }
    }

    async get(req: Request, resp: Response, next: NextFunction) {
        try {
            const robot = await this.dbops.get(req.params.id);
            resp.json({ robot });
        } catch (error) {
            const httpError503 = new HTTPError(
                503,
                'Service unavailable',
                (error as Error).message
            );
            next(httpError503);
        }
    }

    async post(req: Request, resp: Response, next: NextFunction) {
        try {
            const coffee = await this.dbops.post({
                ...req.body,
                creationDate: new Date().toLocaleDateString(),
            });
            resp.json({
                coffee,
            });
        } catch (error) {
            const httpError404 = new HTTPError(
                404,
                'ID not valid (post request error)',
                (error as Error).message
            );
            next(httpError404);
        }
    }

    async patch(req: Request, resp: Response, next: NextFunction) {
        try {
            const robot = await this.dbops.patch(req.params.id, req.body);
            resp.json({ robot });
        } catch (error) {
            const httpError404 = new HTTPError(
                404,
                'ID not valid (patch request error)',
                (error as Error).message
            );
            next(httpError404);
        }
    }

    async delete(req: Request, resp: Response, next: NextFunction) {
        try {
            await this.dbops.delete(req.params.id);
            resp.json({});
        } catch (error) {
            const httpError404 = new HTTPError(
                404,
                'ID not valid (delete request error)',
                (error as Error).message
            );
            next(httpError404);
        }
    }
}
