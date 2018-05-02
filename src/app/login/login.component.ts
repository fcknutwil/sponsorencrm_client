import {Component, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "login",
    template: require("./login.component.html")
})
export class LoginComponent implements OnInit {
    private form: FormGroup;

    public constructor(private loginService: LoginService) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    public login(): void {
        this.loginService.login(this.form.value);
    }
}
