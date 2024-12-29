import FuelRepository from "./fuel.repository";

class FuelService {
    constructor(private fuelRepository: FuelRepository) {}

    public async addFuel(data: any) {
        return await this.fuelRepository.createFuel(data);
    }

    public async getFuel(id: string) {
        return await this.fuelRepository.getFuel(id);
    }
}

export default FuelService;