import 'module-alias/register';
import './shared/middlewares/sentry';
import * as Sentry from '@sentry/node';
import express, { Application } from 'express';


import db from './config/db';
import logger from './shared/utils/logger.util';
import { AuthRoute } from './api/auth';
import { errorHandler, idempotency, rateLimiter } from './shared';

// define config, routes and shared modules


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.configure();
    }

    private async configure() {
        await this.initializeMiddlewares();
        await this.initializeRoutes();
        await this.connectToDatabase();
        await this.initializeErrorHandler();
    }

    private async initializeMiddlewares() {
        logger.info('Middlewares initialize');
        this.app.use(express.json());
        this.app.use(rateLimiter);
        // this.app.use(authenticateToken);
        this.app.use(idempotency);
    }

    private async initializeRoutes() {
        logger.info('Routes initialize');
        this.app.use('/auth', AuthRoute);
    }

    private initializeSentry() {
        Sentry.setupExpressErrorHandler(this.app);
    }

    private async initializeErrorHandler() {
        this.app.use(errorHandler);
        logger.info('ErrorHandler initialize');
    }

    private async connectToDatabase() {
        logger.info('DB initialize');
        await db.initialize();
    }
}

export default new App().app;
