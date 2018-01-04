import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatInputModule} from "@angular/material";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {SessionService} from "./session.service";
import {LoggedInGuard} from "./logged-in-guard.service";
import {LoggedOutGuard} from "./logged-out-guard.service";
import {JwtInterceptor} from "./jwt-interceptor.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [SessionService, LoggedInGuard, LoggedOutGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class SharedModule {
}
