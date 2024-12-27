import { Request, Response, NextFunction } from "express";
import DriverService from "./driver.service";

class DriverController {
    constructor(private driverService: DriverService) {}

    public getDrivers = async (req: Request, res: Response) => {
        const drivers = await this.driverService.getDrivers();
        res.status(200).json(drivers)
    }

    public createDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driver = await this.driverService.createDriver(req.body)
            res.status(201).json(driver);
        } catch (err) {
            next(err)
        }
    }

    public updateDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driver = await this.driverService.updateDriver(req.params.id, req.body)
            res.status(201).json(driver);
        } catch (err) {
            next(err)
        }
    }
}

export default DriverController;