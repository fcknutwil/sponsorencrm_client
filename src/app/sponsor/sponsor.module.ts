import {NgModule} from "@angular/core";
import {SponsorListComponent} from "./sponsor.list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./sponsor.route";
import {SponsorService} from "./sponsor.service";
import {CommonModule} from "@angular/common";
import {SponsorFormComponent} from "./sponsor.form.component";
import {SharedModule} from "../shared/shared.module";
import {OrtService} from "./ort.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        SponsorListComponent,
        SponsorFormComponent
    ],
    providers: [
        SponsorService, OrtService
    ]
})
export class SponsorModule {
}
