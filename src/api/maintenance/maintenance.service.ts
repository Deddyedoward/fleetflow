import MaintenanceRepository from "./maintenance.repository";

class MaintenanceService {
    constructor(private maintenanceRepository: MaintenanceRepository) {}

    public async getMaintenanceSchedule() {
        return await this.maintenanceRepository.findAllSchedule();
    }
}

export default MaintenanceService;