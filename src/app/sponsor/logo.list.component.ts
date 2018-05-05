import {Component, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Dokument} from "./dokument.types";
import {Logo} from "./logo.types";
import {LogoService} from "./logo.service";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
    selector: "logo-list",
    templateUrl:  "./logo.list.component.html"
})
export class LogoListComponent implements OnInit {
    public id: number;
    public dataSource: MatTableDataSource<Logo>;

    constructor(private route: ActivatedRoute, private service: LogoService, private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadTable();
    }

    public openDeleteDialog(entry: Dokument): void {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
            data: {title: "Eintrag löschen", text: "Wollen Sie den Eintrag wirklich löschen?"}
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.service.delete(this.id, entry.id)
                    .then(() => {
                        this.loadTable();
                    });
            }
        });
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
