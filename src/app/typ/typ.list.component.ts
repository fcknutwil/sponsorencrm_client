import {Component, OnInit} from "@angular/core";
import {Typ} from "./typ.types";
import {MatTableDataSource} from '@angular/material';
import {TypService} from "./typ.service";

@Component({
    selector: "typ-list",
    template: require("./typ.list.component.html")
})
export class TypListComponent implements OnInit {

    public dataSource: MatTableDataSource<Typ>;

    constructor(private typService: TypService) {}

    ngOnInit(): void {
        this.typService.getList()
            .then((data) => {
                this.dataSource = new MatTableDataSource(data);
            });
    }
}
