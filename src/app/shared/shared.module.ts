import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
} from "@angular/material";
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
import {ZahlungPipe} from "./zahlung.pipe";
import {MediaMatcher} from "@angular/cdk/layout";
import {SponsortypPipe} from "./sponsortyp.pipe";

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        FormsModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [YesNoDialogComponent, SponsortypPipe, ZahlungPipe],
    providers: [SessionService, PendingRequestService, LoggedInGuard, LoggedOutGuard, MediaMatcher, {
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
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        ReactiveFormsModule,
        SponsortypPipe,
        ZahlungPipe
    ],
    entryComponents: [
        YesNoDialogComponent
    ]
})
export class SharedModule {
}
