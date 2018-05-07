import {LoginComponent} from "./login.component";
import {LoggedOutGuard} from "../shared/logged-out-guard.service";

export let routes = [
  {path: "login", component: LoginComponent, canActivate: [LoggedOutGuard]}
];
