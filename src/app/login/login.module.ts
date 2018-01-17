import {NgModule} from "@angular/core";

import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {LoginService} from "./login.service";
import {RouterModule} from "@angular/router";
import {routes} from "./login.route";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {
}
