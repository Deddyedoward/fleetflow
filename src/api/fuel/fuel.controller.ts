import { NextFunction, Request, Response } from "express";
import FuelService from "./fuel.service";

class FuelController {
    constructor(private fuelService: FuelService) {}

    public getFuel = async (req: Request, res: Response) => {
        const fuel = await this.fuelService.getFuel(req.params.id)
        res.status(200).json(fuel);
    }

    public addFuel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const fuel = await this.fuelService.addFuel(req.body);
            res.status(201).json(fuel);
        } catch (err) {
            next(err)
        }
    }
}

export default FuelController;