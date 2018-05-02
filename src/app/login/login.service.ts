import {Injectable} from "@angular/core";
import {LoginRequest, LoginResponse, USERNAME_STORAGE_KEY} from "./login.types";
import {SessionService} from "../shared/session.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../shared/storage.service";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private sessionService: SessionService, private router: Router,
                private storage: StorageService) {
    }

    public login(request: LoginRequest): Promise<void> {
        return this.http
            .put<LoginResponse>("/login", request)
            .toPromise()
            .then((response) => {
                this.storage.set(USERNAME_STORAGE_KEY, request.name);
                this.sessionService.create(response.token, response.expire);
                this.router.navigate(["/"]);
            });
    }
}
