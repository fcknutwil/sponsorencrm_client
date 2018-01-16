import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatInputModule, MatProgressSpinnerModule} from "@angular/material";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {SessionService} from "./session.service";
import {LoggedInGuard} from "./logged-in-guard.service";
import {LoggedOutGuard} from "./logged-out-guard.service";
import {JwtInterceptor} from "./jwt-interceptor.service";
import {UrlInterceptor} from "./url-interceptor.service";
import {PendingRequestInterceptor} from "./pending-request-interceptor.service";
import {PendingRequestService} from "./pending-request.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [SessionService, PendingRequestService, LoggedInGuard, LoggedOutGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: PendingRequestInterceptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }, {
        provide: HTTP_INTERCEPTORS,
        useClass: UrlInterceptor,
        multi: true
    }],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule
    ]
})
export class SharedModule {
}
