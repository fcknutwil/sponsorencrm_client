import {TypListComponent} from "./typ.list.component";
import {LoggedInGuard} from "../shared/logged-in-guard.service";
import {TypFormComponent} from "./typ.form.component";

export const routes = [
    {path: "typ", component: TypListComponent, canActivate: [LoggedInGuard]},
    {path: "typ/:id", component: TypFormComponent, canActivate: [LoggedInGuard]}
];
