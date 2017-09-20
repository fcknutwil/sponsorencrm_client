import { Component} from "@angular/core";

@Component({
    selector: "login",
    template: require("./login.component.html")
})
export class LoginComponent {
    private user: string;
    private password: string;

    public login(): void {
        console.log(`user: ${this.user} password: ${this.password}`);
    }
}
