import { NextFunction, Request, Response } from "express";
import MaintenanceService from "./maintenance.service";

class MaintenanceController {
    constructor(private maintenanceService: MaintenanceService) {}

    public getMaintenance = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const schedule = await this.maintenanceService.getMaintenanceSchedule();
            res.status(200).json(schedule);
        } catch (err) {
            next(err)
        }
    }
}

export default MaintenanceController;