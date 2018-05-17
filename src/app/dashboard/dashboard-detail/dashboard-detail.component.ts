import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {ActivatedRoute} from '@angular/router';
import {DashboardDetail} from '../dashboard.types';
import {MatTableDataSource} from '@angular/material';
import {Zahlung} from '../../engagement/engagement.types';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html'
})
export class DashboardDetailComponent implements OnInit {

  year: string;
  list: {
    title: string;
    datasource: MatTableDataSource<DashboardDetail>
  }[];

  constructor(private service: DashboardService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.year = params.year;
      this.service.getDetail(params.year).then((data) => {
        this.list = [];
        this.list.push({
          title: 'FC Knutwil - Einmalig',
          datasource: new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.annual && !e.seebli)))
        });
        this.list.push({
          title: 'FC Knutwil - Jährlich',
          datasource: new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.onetime && !e.seebli)))
        });
        this.list.push({
          title: 'Seebli Plus - Einmalig',
          datasource: new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.annual && e.seebli)))
        });
        this.list.push({
          title: 'Seebli Plus - Jährlich',
          datasource: new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.onetime && e.seebli)))
        });
      });
    });
  }
}
