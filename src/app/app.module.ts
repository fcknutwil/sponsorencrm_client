import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdInputModule} from '@angular/material';

import { AppComponent } from './app.component.ts';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
