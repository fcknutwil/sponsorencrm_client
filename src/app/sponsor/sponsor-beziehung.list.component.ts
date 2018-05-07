import {Component, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {SponsorBeziehungService} from "./sponsor-beziehung.service";
import {SponsorBeziehung} from "./sponsor-beziehung.types";
import {YesNoDialogComponent} from "../shared/yes-no-dialog.component";

@Component({
  selector: "sponsor-beziehung-list",
  templateUrl: "./sponsor-beziehung.list.component.html"
})
export class SponsorBeziehungListComponent implements OnInit {
  public id: number;
  public dataSource: MatTableDataSource<SponsorBeziehung>;

  constructor(private route: ActivatedRoute, private service: SponsorBeziehungService, private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.loadTable();
  }

  public openDeleteDialog(entry: SponsorBeziehung): void {
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
