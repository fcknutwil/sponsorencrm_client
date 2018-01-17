import {Component, Input, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {SponsorEngagementService} from "./sponsor-engagement.service";
import {SponsorEngagement} from "./sponsor-engagement.types";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
    selector: "sponsor-engagement-list",
    template: require("./sponsor-engagement.list.component.html"),
})
export class SponsorEngagementListComponent implements OnInit {
    public id: number;
    public dataSource: MatTableDataSource<SponsorEngagement>;

    constructor(private route: ActivatedRoute, private service: SponsorEngagementService, private dialog: MatDialog) {
    }

    public ngOnInit(): void {
        this.loadTable();
    }

    public openDeleteDialog(entry: SponsorEngagement): void {
        const dialogRef = this.dialog.open(YesNoDialogComponent, {
            data: {title: "Eintrag löschen", text: "Wollen Sie den Eintrag wirklich löschen?"}
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.service.delete(entry)
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
