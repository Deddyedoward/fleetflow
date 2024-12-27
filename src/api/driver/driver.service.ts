import DriverRepository from "./driver.repository";
import { CreateDriverBody, UpdateDriverBody } from "./driver.validator";
import DriverExistsException from "./exceptions/exceptions/driver-exists.exception";

class DriverService {
    constructor(private driverRepository: DriverRepository) {}

    public async getDrivers() {
        return await this.driverRepository.getDrivers();
    }

    public async createDriver(createDriverBody: CreateDriverBody) {
        const driver = await this.driverRepository.getDriver(createDriverBody.license_number);

        if(driver) {
            throw new DriverExistsException();
        }

        createDriverBody.status = 'active';
        return await this.driverRepository.addDriver(createDriverBody);
    }

    public async updateDriver(id: string, updateDriverBody: UpdateDriverBody) {
        const driver = await this.driverRepository.getDriverById(id)

        if(!driver) {
            throw new Error('Not found error!')
        }

        return await this.driverRepository.patchDriver(id, updateDriverBody)
    }
}

export default DriverService;