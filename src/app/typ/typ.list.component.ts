import {Component, OnInit} from '@angular/core';
import {Typ} from './typ.types';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {TypService} from './typ.service';
import {YesNoDialogComponent} from '../shared/yes-no-dialog.component';

@Component({
  selector: 'typ-list',
  templateUrl: './typ.list.component.html'
})
export class TypListComponent implements OnInit {

  public dataSource: MatTableDataSource<Typ>;

  constructor(private typService: TypService, public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.loadTable();
  }

  public openDeleteDialog(entry: Typ): void {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {title: 'Eintrag löschen', text: 'Wollen Sie den Eintrag wirklich löschen?'}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.typService.delete(entry)
          .then(() => {
            this.loadTable();
          });
      }
    });
  }

  private loadTable(): void {
    this.typService.getList()
      .then((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
  }
}
