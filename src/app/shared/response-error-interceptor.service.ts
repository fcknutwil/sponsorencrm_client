import {Injectable} from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map, catchError, finalize} from "rxjs/operators";
import {ErrorMessageService} from "./error-message.service";

@Injectable()
export class ResponseErrorInterceptor implements HttpInterceptor {

    constructor(private errorMessageService: ErrorMessageService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event) => {
                return event;
            }),
            catchError((error) => {
                this.errorMessageService.logHttpError(error);
                return Observable.throw(error);
            }),
            finalize(() => {
            })
        );
    }
}
