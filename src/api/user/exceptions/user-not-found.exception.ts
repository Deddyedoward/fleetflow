export default class UserNotFoundException extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor() {
        super();
        this.message = 'Not Found User';
        this.statusCode = 404;
        this.code = 'ERROR_001';
    }
}
