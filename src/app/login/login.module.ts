import {NgModule} from "@angular/core";

import {LoginComponent} from './login.component.ts';
import {SharedModule} from "../shared/shared.module.ts";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        LoginComponent
    ],
    providers: []
})
export class LoginModule {
}
