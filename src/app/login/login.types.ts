export class LoginRequest {
  public name: string;
  public password: string;
}

export interface LoginResponse {
  token: string;
  expire: number;
}

export const USERNAME_STORAGE_KEY = 'username';
