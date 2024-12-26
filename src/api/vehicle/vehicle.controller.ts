import { NextFunction, Response, Request } from "express";
import VehicleService from "./vehicle.service";

class VehicleController {
    private vehicleService: VehicleService

    constructor(vehicleService: VehicleService) {
        this.vehicleService = vehicleService;
    }

    public getVehicles = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicles = await this.vehicleService.getVehicleLists();
            res.status(200).json(vehicles);
        } catch (err) {
            next(err)
        }
    }

    public createVehicle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicle = await this.vehicleService.createVehicle(req.body)
            res.status(201).json(vehicle);
        } catch (err) {
            next(err)
        }
    }
}

export default VehicleController