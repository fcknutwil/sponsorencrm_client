import {TypComponent} from "./typ.component";
import {LoggedInGuard} from "../shared/logged-in-guard.service";

export const routes = [
    {path: "typ", component: TypComponent, canActivate: [LoggedInGuard]}
];
