import { Component} from "@angular/core";
import {LoginService} from "./login.service";
import {LoginRequest} from "./login.types";

@Component({
    selector: "login",
    template: require("./login.component.html")
})
export class LoginComponent {
    private loginRequest: LoginRequest;

    public constructor(private loginService: LoginService) {
        this.loginRequest = new LoginRequest();
    }

    public login(): void {
        this.loginService.login(this.loginRequest);
    }
}
