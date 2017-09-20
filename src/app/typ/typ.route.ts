import {TypComponent} from "./typ.component";
import {AuthGuard} from "../shared/auth-guard.service";

export var routes = [
    {path: "typ", component: TypComponent, canActivate: [AuthGuard]}
];