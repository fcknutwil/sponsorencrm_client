import { Component} from "@angular/core";
import {LoginService} from "./login.service";

@Component({
    selector: "login",
    template: require("./login.component.html")
})
export class LoginComponent {
    private user: string;
    private password: string;

    public constructor(private loginService: LoginService) {}

    public login(): void {
        this.loginService.login(this.user, this.password);
    }
}
