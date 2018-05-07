import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {SessionService} from "./session.service";

@Injectable()
export class LoggedOutGuard implements CanActivate {

  public constructor(private sessionService: SessionService, private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.sessionService.isActive()) {
      return true;
    }
    this.router.navigate(["/"]);
  }
}
