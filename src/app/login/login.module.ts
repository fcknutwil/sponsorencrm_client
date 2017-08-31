import {NgModule} from "@angular/core";
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

import {LoginComponent} from './login.component.ts';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MdInputModule,
        MdButtonModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
