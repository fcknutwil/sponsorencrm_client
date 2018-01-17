import {NgModule} from "@angular/core";
import {SponsorListComponent} from "./sponsor.list.component";
import {RouterModule} from "@angular/router";
import {routes} from "./sponsor.route";
import {SponsorService} from "./sponsor.service";
import {CommonModule} from "@angular/common";
import {SponsorFormComponent} from "./sponsor.form.component";
import {SharedModule} from "../shared/shared.module";
import {OrtService} from "./ort.service";
import {SponsorEngagementListComponent} from "./sponsor-engagement.list.component";
import {SponsorEngagementFormComponent} from "./sponsor-engagement.form.component";
import {SponsorEngagementService} from "./sponsor-engagement.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        SponsorListComponent,
        SponsorFormComponent,
        SponsorEngagementListComponent,
        SponsorEngagementFormComponent
    ],
    providers: [
        SponsorService, OrtService, SponsorEngagementService
    ]
})
export class SponsorModule {
}
