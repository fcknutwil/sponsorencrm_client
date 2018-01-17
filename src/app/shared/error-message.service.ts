

import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class ErrorMessageService {

    constructor(public snackBar: MatSnackBar) {}

    public logHttpError(error: HttpErrorResponse): void {
        this.snackBar.open(error.message, "Schliessen", {
            duration: 3000
        });
    }
}