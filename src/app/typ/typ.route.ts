import {TypComponent} from "./typ.component";
import {AuthGuard} from "../shared/auth-guard.service";

export const routes = [
    {path: "typ", component: TypComponent, canActivate: [AuthGuard]}
];
