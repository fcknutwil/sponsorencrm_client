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
import {SponsorBeziehungListComponent} from "./sponsor-beziehung.list.component";
import {SponsorBeziehungFormComponent} from "./sponsor-beziehung.form.component";
import {SponsorBeziehungService} from "./sponsor-beziehung.service";
import {DokumentFormComponent} from "./dokument.form.component";
import {FileInputComponent} from "./file-input.component";
import {DokumentService} from "./dokument.service";
import {DokumentListComponent} from "./dokument.list.component";

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
        SponsorEngagementFormComponent,
        SponsorBeziehungListComponent,
        SponsorBeziehungFormComponent,
        DokumentListComponent,
        DokumentFormComponent,
        FileInputComponent
    ],
    providers: [
        DokumentService, SponsorService, OrtService, SponsorEngagementService, SponsorBeziehungService
    ]
})
export class SponsorModule {
}
