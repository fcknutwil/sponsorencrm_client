
import {Component, OnInit} from "@angular/core";
import {SponsorService} from "./sponsor.service";
import {Sponsor} from "./sponsor.types";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
    selector: "sponsorList",
    template: require("./sponsor.list.component.html")
})
export class SponsorListComponent implements OnInit {

    public dataSource: MatTableDataSource<Sponsor>;

    constructor(private service: SponsorService, public dialog: MatDialog) {}

    public ngOnInit() {
        this.loadTable();
    }

    public openDeleteDialog(entry: Sponsor): void {
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
        this.service.getList().then((data) => {
            this.dataSource = new MatTableDataSource(data);
        });
    }
}
