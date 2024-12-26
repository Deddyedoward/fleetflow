export default class VehicleExistsException extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor() {
        super();
        this.message = 'Vehicle is found, cannot be added!';
        this.statusCode = 400;
        this.code = 'ERROR_004';
    }
}
