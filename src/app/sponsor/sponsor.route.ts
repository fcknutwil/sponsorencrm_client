import {SponsorListComponent} from "./sponsor.list.component";
import {LoggedInGuard} from "../shared/logged-in-guard.service";
import {SponsorFormComponent} from "./sponsor.form.component";
import {SponsorEngagementFormComponent} from "./sponsor-engagement.form.component";
import {SponsorEngagementListComponent} from "./sponsor-engagement.list.component";

export const routes = [
    {path: "sponsor", component: SponsorListComponent, canActivate: [LoggedInGuard]},
    {path: "sponsor/:id", component: SponsorFormComponent, canActivate: [LoggedInGuard], children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        {path: 'list', component: SponsorEngagementListComponent},
        {path: 'form/:id', component: SponsorEngagementFormComponent}
    ]}
];
