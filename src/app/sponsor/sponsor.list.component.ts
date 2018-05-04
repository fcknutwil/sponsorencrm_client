import {Component, OnInit, ViewChild} from "@angular/core";
import {SponsorService} from "./sponsor.service";
import {Sponsor} from "./sponsor.types";
import {MatDialog, MatPaginator, MatTableDataSource, Sort} from "@angular/material";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
    selector: "sponsor-list",
    template: require("./sponsor.list.component.html")
})
export class SponsorListComponent implements OnInit {

    public dataSource: MatTableDataSource<Sponsor>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: SponsorService, public dialog: MatDialog) {
    }

    public ngOnInit() {
        this.loadTable();
    }

    public sort(sort: Sort): void {
        if (sort.active && sort.direction != '') {
            this.dataSource.data = this.dataSource.data.slice().sort((a, b) => {
                let isAsc = sort.direction == 'asc';
                switch (sort.active) {
                    case 'name':
                        return this.compare(`${a.name} ${a.vorname}`, `${b.name} ${b.vorname}`, isAsc);
                    case 'ort':
                        return this.compare(a.ortstring, b.ortstring, isAsc);
                    default:
                        return 0;
                }
            });
        }
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

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    private compare(a, b, isAsc): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    private loadTable(): void {
        this.service.getList().then((data) => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
        });
    }
}
