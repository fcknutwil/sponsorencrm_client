import {Injectable} from "@angular/core";

import * as moment from "moment";

@Injectable()
export class SessionService {
    private static readonly TOKEN_KEY = "sponsoren_crm_jwt";
    private static readonly TOKEN_EXPIRE_KEY = "sponsoren_crm_jwt_expire";
    private static readonly FROM_SECONDS_TO_MILLIS = 1000;

    public create(token: string, expire: number): void {
        localStorage.setItem(SessionService.TOKEN_KEY, token);

        const expiresAt = moment(expire * SessionService.FROM_SECONDS_TO_MILLIS);
        localStorage.setItem(SessionService.TOKEN_EXPIRE_KEY, expiresAt.toISOString());
    }

    public isActive(): boolean {
        return this.hasToken() && this.isTokenActive();
    }

    public getToken(): string {
        return localStorage.getItem(SessionService.TOKEN_KEY);
    }

    private hasToken(): boolean {
        return this.getToken() != null;
    }

    private isTokenActive(): boolean {
        const expiresAt = localStorage.getItem(SessionService.TOKEN_EXPIRE_KEY);
        return expiresAt && moment().isBefore(moment(expiresAt));
    }
}
