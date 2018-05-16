import {LoggedInGuard} from '../shared/logged-in-guard.service';
import {DashboardComponent} from './dashboard.component';
import {DashboardDetailComponent} from './dashboard-detail/dashboard-detail.component';

export const dashboardRoutes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]},
  {path: 'dashboard/:year', component: DashboardDetailComponent, canActivate: [LoggedInGuard]}
];
