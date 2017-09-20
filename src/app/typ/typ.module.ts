import {NgModule} from "@angular/core";
import {TypComponent} from "./typ.component";
import {RouterModule} from "@angular/router";
import {routes} from "./typ.route";

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        TypComponent
    ]
})
export class TypModule {
}
