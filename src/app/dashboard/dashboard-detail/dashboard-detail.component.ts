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
  annualDataSource: MatTableDataSource<DashboardDetail>;
  onetimeDataSource: MatTableDataSource<DashboardDetail>;
  seebliAnnualDataSource: MatTableDataSource<DashboardDetail>;
  seebliOnetimeDataSource: MatTableDataSource<DashboardDetail>;

  constructor(private service: DashboardService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.year = params.year;
      this.service.getDetail(params.year).then((data) => {
        this.annualDataSource = new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.annual && !e.seebli)));
        this.onetimeDataSource = new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.onetime && !e.seebli)));
        this.seebliAnnualDataSource = new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.annual && e.seebli)));
        this.seebliOnetimeDataSource = new MatTableDataSource(data.filter((e => e.zahlung === Zahlung.onetime && e.seebli)));
      });
    });
  }
}
