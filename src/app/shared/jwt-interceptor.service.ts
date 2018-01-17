import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {SessionService} from "./session.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public auth: SessionService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                "X-Authorization": `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(request);
    }
}
