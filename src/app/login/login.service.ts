import {Injectable} from "@angular/core";
import {SessionService} from "../shared/session.service";

@Injectable()
export class LoginService {

    private loggedIn: boolean;

    constructor(private sessionService: SessionService) {}

    public login(user: string, password: string): boolean {
        if (user === password) {
            this.sessionService.create();
            return true;
        }
        return false;
    }
}
