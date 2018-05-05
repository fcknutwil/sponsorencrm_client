import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorIntl
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
import {ErrorMessageService} from "./error-message.service";
import {ResponseErrorInterceptor} from "./response-error-interceptor.service";
import {StorageService} from "./storage.service";
import {MatPaginatorIntlDeService} from "./mat-paginator-intl-de.service";
import {BeziehungtypPipe} from "./beziehungtyp.pipe";

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        FormsModule,
        HttpClientModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [YesNoDialogComponent, BeziehungtypPipe, SponsortypPipe, ZahlungPipe],
    providers: [SessionService, StorageService, PendingRequestService, LoggedInGuard, LoggedOutGuard,
        MediaMatcher, ErrorMessageService, {
            provide: HTTP_INTERCEPTORS,
            useClass: PendingRequestInterceptor,
            multi: true
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseErrorInterceptor,
            multi: true
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true
        }, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlDeService}],
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
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatToolbarModule,
        ReactiveFormsModule,
        BeziehungtypPipe,
        SponsortypPipe,
        ZahlungPipe,
        MatDatepickerModule
    ],
    entryComponents: [
        YesNoDialogComponent
    ]
})
export class SharedModule {
}
