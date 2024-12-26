import { Router } from 'express';
import VehicleRepository from './vehicle.repository';
import VehicleService from './vehicle.service';
import VehicleController from './vehicle.controller';
import ValidateSchema from '../../shared/middlewares/validation';
import { createVehicleSchema } from './vehicle.validator';

const vehicleRoute = Router();

// defines all dependencies
const vehicleRepository = new VehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);

// defines all routes
vehicleRoute.get(
    '/',
    vehicleController.getVehicles
);

vehicleRoute.post(
    '/',
    ValidateSchema(createVehicleSchema),
    vehicleController.createVehicle
)

export default vehicleRoute;
