import VehicleRepository from "./vehicle.repository";
import { CreateVehicleBody } from "./vehicle.validator";
import VehicleExistsException from "./exceptions/vehicle-exists.exception";

class VehicleService {

    constructor(private vehicleRepository: VehicleRepository) {}

    private serializeCreateVehicle(data: CreateVehicleBody) {
        return {
            ...data,
            status: 'pending'
        }
    }

    public async getVehicleLists() {
        return await this.vehicleRepository.getVehicles();
    }

    public async createVehicle(data: CreateVehicleBody) {
        const vehicleData = this.serializeCreateVehicle(data);

        const vehicle = await this.vehicleRepository.getVehicleExists(vehicleData.vehicle_name);

        if(vehicle) {
            throw new VehicleExistsException()
        }

        return await this.vehicleRepository.createVehicle(vehicleData);
    }
}

export default VehicleService;