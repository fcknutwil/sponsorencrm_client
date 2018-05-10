import {LoggedInGuard} from '../shared/logged-in-guard.service';
import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]}
];
