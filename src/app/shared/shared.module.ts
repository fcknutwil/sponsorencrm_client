import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {BeziehungtypPipe} from "./beziehungtyp.pipe";
import {MaterialModule} from "./material/material.module";

const importExportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule
];

const imports = importExportModules.slice();
imports.push(HttpClientModule);

const exports = importExportModules.slice();
exports.push(BeziehungtypPipe, SponsortypPipe, ZahlungPipe);

@NgModule({
  imports: imports,
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
    }],
  exports: exports,
  entryComponents: [
    YesNoDialogComponent
  ]
})
export class SharedModule {
}
