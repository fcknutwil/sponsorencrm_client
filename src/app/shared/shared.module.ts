import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdInputModule, MdButtonModule} from "@angular/material";
import {SessionService} from "./session.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [],
    providers: [SessionService],
    exports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdInputModule
    ]
})
export class SharedModule {
}