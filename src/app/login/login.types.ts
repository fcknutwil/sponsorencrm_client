export class LoginRequest {
    public name: string;
    public password: string;
}

export interface LoginResponse {
    key: string;
}
