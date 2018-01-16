import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'yes-no-dialog',
    template: require('./yes-no-dialog.component.html')
})
export class YesNoDialogComponent {

    constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }
}