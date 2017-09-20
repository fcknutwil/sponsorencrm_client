import {Injectable} from "@angular/core";

@Injectable()
export class SessionService {
    private active: boolean;

    public create(): void {
        this.active = true;
    }

    public isActive(): boolean {
        return this.active;
    }
}
