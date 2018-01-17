import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TypModule} from "./typ/typ.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {LoginModule} from "./login/login.module";
import {SharedModule} from "./shared/shared.module";
import {EngagementModule} from "./engagement/engagement.module";
import {SponsorModule} from "./sponsor/sponsor.module";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/sponsor",
        pathMatch: "full"
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LoginModule,
        SponsorModule,
        EngagementModule,
        TypModule,
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: "de-CH"},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
