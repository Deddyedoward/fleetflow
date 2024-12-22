export class TokenNotFoundException extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor() {
        super();
        this.message = 'Not Found Token';
        this.statusCode = 401;
        this.code = 'ERROR_002';
    }
}
