/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { CustomError } from './errors/error.js';
import { usersRouter } from './router/users.js';
import { robotsRouter } from './router/robots.js';

export const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.send(
        `Back - Robots - W8CHWeekend -   PUBLIC ROUTE: /robots   PRIVATE ROUTE: /robots:id  (use JWT Token, generate with POST request on /users/login with this account:  "name": "Paquito", "passwd": "abcdfe" )  `
    ).end();
});

app.use('/robots', robotsRouter);
app.use('/users', usersRouter);

app.use(
    (
        error: CustomError,
        _req: Request,
        resp: Response,
        _next: NextFunction
    ) => {
        console.log(
            error.name,
            error.statusCode,
            error.statusMessage,
            error.message
        );
        let status = error.statusCode || 500;
        if (error.name === 'ValidationError') {
            status = 406;
        }
        const result = {
            status: status,
            type: error.name,
            error: error.message,
        };
        resp.status(status).json(result).end();
    }
);
