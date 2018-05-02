import {Component, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Dokument} from "./dokument.types";
import {DokumentService} from "./dokument.service";
import {Logo} from "./logo.types";
import {LogoService} from "./logo.service";

@Component({
    selector: "logo-list",
    template: require("./logo.list.component.html"),
})
export class LogoListComponent implements OnInit {
    public id: number;
    public dataSource: MatTableDataSource<Logo>;

    constructor(private route: ActivatedRoute, private service: LogoService, private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadTable();
    }

    private loadTable(): void {
        this.route.parent.params.subscribe((params) => {
            if (params.id !== "new") {
                this.id = params.id;
                this.service.getList(params.id)
                    .then((data) => this.dataSource = new MatTableDataSource(data));
            }
        });
    }
}
