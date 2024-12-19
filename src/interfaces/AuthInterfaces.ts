export interface AuthResultQuery extends AuthRequest{
    id: string;
    roles: any[];
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthSignUpRequest extends AuthRequest {
    first_name: string;
    last_name: string;
}