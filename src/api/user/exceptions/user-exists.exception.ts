export default class UserExistsException extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor() {
        super();
        this.message = 'User already registered';
        this.statusCode = 404;
        this.code = 'ERROR_003';
    }
}
