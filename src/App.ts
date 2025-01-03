import 'module-alias/register';
import './shared/middlewares/sentry';
import * as Sentry from '@sentry/node';
import express, { Application } from 'express';


import db from './config/db';
import logger from './shared/utils/logger.util';
import { authenticateToken, errorHandler, idempotency, rateLimiter } from './shared';
import userRoute from './api/user/user.routes';
import authRoute from './api/auth/auth.routes';
import vehicleRoute from './api/vehicle/vehicle.route';
import driverRoute from './api/driver/driver.route';
import fuelRoute from './api/fuel/fuel.route';
import maintenanceRoute from './api/maintenance/maintenance.route';
// define config, routes and shared modules


class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.configure();
    }

    private async configure() {
        await this.connectToDatabase();
        await this.initializeMiddlewares();
        await this.initializeRoutes();
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
        this.app.use('/auth', authRoute);
        this.app.use('/user', authenticateToken, userRoute);
        this.app.use('/vehicle', authenticateToken, vehicleRoute);
        this.app.use('/driver', driverRoute);
        this.app.use('/fuel', fuelRoute);
        this.app.use('/maintenance', maintenanceRoute);
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
