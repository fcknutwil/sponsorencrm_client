import {Injectable} from "@angular/core";
import {LoginRequest, LoginResponse} from "./login.types";
import {Http} from "@angular/http";
import {SessionService} from "../shared/session.service";

@Injectable()
export class LoginService {

    constructor(private http: Http, private sessionService: SessionService) {}

    public login(request: LoginRequest): Promise<LoginResponse> {
        return this.http
            .put("/rest/login", request)
            .toPromise()
            .then((response) => {
                this.sessionService.create();
                return response.json() as LoginResponse;
            });
    }
}
