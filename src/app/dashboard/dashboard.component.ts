import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';

class FileFlatNode {
  filename: string;
  type: any;
  level: number;
  expandable: boolean;
}


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public data;

  constructor(private service: DashboardService) { }

  public ngOnInit() {
    this.service.getList().then((data) => {
      this.data = [];
      Object.keys(data).reverse().forEach((year) => {
        this.data.push({
          year: year,
          value: data[year]
        });
      });
      console.log(this.data);
    });
  }

}
