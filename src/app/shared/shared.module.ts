import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdInputModule, MdButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ]
})
export class SharedModule {
}