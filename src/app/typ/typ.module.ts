import {NgModule} from "@angular/core";
import {TypListComponent} from "./typ.list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./typ.route";
import {SharedModule} from "../shared/shared.module";
import {TypService} from "./typ.service";
import {TypFormComponent} from "./typ.form.component";

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        TypListComponent,
        TypFormComponent
    ],
    providers: [
        TypService
    ]
})
export class TypModule {
}
