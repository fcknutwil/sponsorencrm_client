import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard.route';
import {DashboardService} from './dashboard.service';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes),
    SharedModule
  ],
  declarations: [DashboardComponent, DashboardDetailComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
