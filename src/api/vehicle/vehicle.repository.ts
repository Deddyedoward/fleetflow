import db from "../../config/db";
import { Vehicle } from "./vehicle.model";
import { CreateVehicleBody } from "./vehicle.validator";

class VehicleRepository {
    constructor() {}

    public async getVehicles() {
        return await db.createQueryBuilder(Vehicle, "vehicle").getMany();
    }

    public async getVehicleExists(name: string) {
        return await db.createQueryBuilder()
                       .from(Vehicle, "vehicle")
                       .where("vehicle_name = :name", {name})
                       .getCount();
    }

    public async createVehicle(data: CreateVehicleBody) {
        return await db.createQueryBuilder()
                       .insert()
                       .into(Vehicle)
                       .values(data)
                       .execute();
    }
}

export default VehicleRepository;