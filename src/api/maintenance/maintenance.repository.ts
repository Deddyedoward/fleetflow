import db from "../../config/db";
import { Maintenance } from "./maintenance.model";

class MaintenanceRepository {
    constructor() {}

    public async findAllSchedule() {
        return await db.createQueryBuilder(Maintenance, "maintenance").getMany();
    }
}

export default MaintenanceRepository;