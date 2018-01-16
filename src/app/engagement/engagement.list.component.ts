import {Component, OnInit} from "@angular/core";
import {Engagement} from "./engagement.types";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {EngagementService} from "./engagement.service";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
    selector: "engagement-list",
    template: require("./engagement.list.component.html")
})
export class EngagementListComponent implements OnInit {

    public dataSource: MatTableDataSource<Engagement>;

    constructor(private engagementService: EngagementService, public dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadTable();
    }

    public openDeleteDialog(entry: Engagement): void {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
            data: {title: "Eintrag löschen", text: "Wollen Sie den Eintrag wirklich löschen?"}
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.engagementService.delete(entry)
                    .then(() => {
                        this.loadTable();
                    });
            }
        });
    }

    private loadTable(): void {
        this.engagementService.getList()
            .then((data) => {
                this.dataSource = new MatTableDataSource(data);
            });
    }
}
