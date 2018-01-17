import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {SessionService} from "./session.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

    constructor(public auth: SessionService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const prefix = "/rest" + (request.url !== "/login" ? "/api" : "");
        request = request.clone({
            url: prefix + request.url
        });
        return next.handle(request);
    }
}
