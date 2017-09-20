import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdInputModule, MdButtonModule} from "@angular/material";
import {SessionService} from "./session.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [],
    providers: [SessionService, AuthGuard],
    exports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ]
})
export class SharedModule {
}