import db from "../../config/db";
import { Fuel } from "./fuel.model";

class FuelRepository {
    constructor() {}

    public async createFuel(data: any) {
        return await db.createQueryBuilder()
                       .insert()
                       .into(Fuel)
                       .values(data)
                       .execute()
    }

    public async getFuel(id: string) {
        return await db.createQueryBuilder(Fuel, "fuel")
                       .where("fuel.id = :id", {id})
                       .getOne();
    }
    
}

export default FuelRepository;