import {Injectable} from "@angular/core";

import * as moment from "moment";
import {StorageService} from "./storage.service";

@Injectable()
export class SessionService {
    private static readonly TOKEN_KEY = "jwt";
    private static readonly TOKEN_EXPIRE_KEY = "jwt_expire";
    private static readonly FROM_SECONDS_TO_MILLIS = 1000;

    constructor(private storage: StorageService) {}

    public create(token: string, expire: number): void {
        this.storage.set(SessionService.TOKEN_KEY, token);

        const expiresAt = moment(expire * SessionService.FROM_SECONDS_TO_MILLIS);
        this.storage.set(SessionService.TOKEN_EXPIRE_KEY, expiresAt.toISOString());
    }

    public isActive(): boolean {
        return this.hasToken() && this.isTokenActive();
    }

    public getToken(): string {
        return this.storage.get(SessionService.TOKEN_KEY);
    }

    private hasToken(): boolean {
        return this.getToken() != null;
    }

    private isTokenActive(): boolean {
        const expiresAt = this.storage.get(SessionService.TOKEN_EXPIRE_KEY);
        return expiresAt && moment().isBefore(moment(expiresAt));
    }
}
