export default class DriverExistsException extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor() {
        super();
        this.message = 'Driver is found, cannot be added!';
        this.statusCode = 400;
        this.code = 'ERROR_004';
    }
}
