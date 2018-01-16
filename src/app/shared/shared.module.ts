import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule
} from "@angular/material";
import {MatTableModule} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {SessionService} from "./session.service";
import {LoggedInGuard} from "./logged-in-guard.service";
import {LoggedOutGuard} from "./logged-out-guard.service";
import {JwtInterceptor} from "./jwt-interceptor.service";
import {UrlInterceptor} from "./url-interceptor.service";
import {PendingRequestInterceptor} from "./pending-request-interceptor.service";
import {PendingRequestService} from "./pending-request.service";
import {YesNoDialogComponent} from "./yes-no-dialog.component";

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientModule
    ],
    declarations: [YesNoDialogComponent],
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
        CdkTableModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatTableModule
    ],
    entryComponents: [
        YesNoDialogComponent
    ]
})
export class SharedModule {
}
