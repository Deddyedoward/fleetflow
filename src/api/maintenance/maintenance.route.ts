import { Router } from 'express';
import MaintenanceRepository from './maintenance.repository';
import MaintenanceService from './maintenance.service';
import MaintenanceController from './maintenance.controller';

const maintenanceRoute = Router();

// defines all dependencies
const maintenanceRepository = new MaintenanceRepository();
const maintenanceService = new MaintenanceService(maintenanceRepository);
const maintenanceController = new MaintenanceController(maintenanceService);

// defines all routes
maintenanceRoute.get(
    '/',
    maintenanceController.getMaintenance
);

export default maintenanceRoute;
