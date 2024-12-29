import { Router } from 'express';
import FuelRepository from './fuel.repository';
import FuelService from './fuel.service';
import FuelController from './fuel.controller';

const fuelRoute = Router();

// defines all dependencies
const fuelRepository = new FuelRepository();
const fuelService = new FuelService(fuelRepository);
const fuelController = new FuelController(fuelService);

// defines all routes
fuelRoute.get(
    '/:id',
    fuelController.getFuel
);

fuelRoute.post(
    '/',
    fuelController.addFuel
)

export default fuelRoute;
