import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, catchError, finalize} from "rxjs/operators";
import {PendingRequestService} from "./pending-request.service";

@Injectable()
export class PendingRequestInterceptor implements HttpInterceptor {

    constructor(public pendingRequestService: PendingRequestService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.pendingRequestService.request();
        return next.handle(request).pipe(
            map((event) => {
                return event;
            }),
            catchError((error) => {
                return Observable.throw(error);
            }),
            finalize(() => {
                this.pendingRequestService.response();
            })
        );
    }
}
