import {SponsorListComponent} from "./sponsor.list.component";
import {LoggedInGuard} from "../shared/logged-in-guard.service";
import {SponsorFormComponent} from "./sponsor.form.component";

export const routes = [
    {path: "sponsor", component: SponsorListComponent, canActivate: [LoggedInGuard]},
    {path: "sponsor/:id", component: SponsorFormComponent, canActivate: [LoggedInGuard]}
];
