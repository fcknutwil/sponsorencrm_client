import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TypModule} from "./typ/typ.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {LoginModule} from "./login/login.module";
import {SharedModule} from "./shared/shared.module";
import {EngagementModule} from "./engagement/engagement.module";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/sponsoren",
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
        EngagementModule,
        TypModule,
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
