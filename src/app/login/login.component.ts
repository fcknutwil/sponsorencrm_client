import {Component, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../shared/storage.service";
import {USERNAME_STORAGE_KEY} from "./login.types";

@Component({
    selector: "login",
    template: require("./login.component.html")
})
export class LoginComponent implements OnInit {
    private form: FormGroup;

    public constructor(private loginService: LoginService, private storage: StorageService) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(this.storage.get(USERNAME_STORAGE_KEY), Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    public login(): void {
        this.loginService.login(this.form.value);
    }
}
