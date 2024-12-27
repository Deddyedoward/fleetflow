import db from "../../config/db";
import { Driver } from "./driver.model";
import { CreateDriverBody, UpdateDriverBody } from "./driver.validator";

class DriverRepository {

    public async getDriver(license_number: string) {
        return await db.createQueryBuilder()
                       .from(Driver, "driver")
                       .where("license_number = :license_number", { license_number })
                       .getCount();
    }

    public async getDriverById(id: string) {
        return await db.createQueryBuilder()
                       .from(Driver, "driver")
                       .where("id = :id", { id })
                       .getCount();
    }

    public async getDrivers() {
        return await db.createQueryBuilder(Driver, "driver").getMany();
    }

    public async addDriver(data: CreateDriverBody) {
        return await db.createQueryBuilder()
                       .insert()
                       .into(Driver)
                       .values(data)
                       .execute()
    }

    public async patchDriver(id: string, data: UpdateDriverBody) {
        return await db.createQueryBuilder()
                       .update(Driver)
                       .set(data)
                       .where('id = :id', {id})
                       .execute()
    }
}

export default DriverRepository;