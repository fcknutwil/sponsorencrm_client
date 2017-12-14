import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatInputModule} from "@angular/material";
import {SessionService} from "./session.service";
import {AuthGuard} from "./auth-guard.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatButtonModule,
        HttpModule
    ],
    declarations: [],
    providers: [SessionService, AuthGuard],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class SharedModule {
}
