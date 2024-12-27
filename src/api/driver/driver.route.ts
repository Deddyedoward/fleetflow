import { Router } from 'express';
import DriverRepository from './driver.repository';
import DriverService from './driver.service';
import DriverController from './driver.controller';
import { validateSchema } from '../../shared';
import { createDriverSchema } from './driver.validator';

const driverRoute = Router();

// defines all dependencies
const driverRepository = new DriverRepository();
const driverService = new DriverService(driverRepository);
const driverController = new DriverController(driverService);

// defines all routes
driverRoute.get(
    '/',
    driverController.getDrivers
)

driverRoute.post(
    '/',
    validateSchema(createDriverSchema),
    driverController.createDriver
)

driverRoute.patch(
    '/:id',
    validateSchema(createDriverSchema),
    driverController.updateDriver
)

export default driverRoute;
