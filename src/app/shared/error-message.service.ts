

import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {HttpErrorResponse} from "@angular/common/http";

import * as _ from "lodash";

@Injectable()
export class ErrorMessageService {

    constructor(public snackBar: MatSnackBar) {}

    public logHttpError(error: HttpErrorResponse): void {
        const message = _.get(error, 'error.message', error.message);
        this.snackBar.open(message, "Schliessen", {
            duration: 3000
        });
    }
}