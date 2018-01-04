import {Injectable} from "@angular/core";
import {LoginRequest, LoginResponse} from "./login.types";
import {SessionService} from "../shared/session.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) {}

    public login(request: LoginRequest): Promise<void> {
        return this.http
            .put<LoginResponse>("/rest/login", request)
            .toPromise()
            .then((response) => {
                this.sessionService.create(response.token, response.expire);
                this.router.navigate(["/"]);
            });
    }
}
