import {EngagementListComponent} from './engagement.list.component';
import {LoggedInGuard} from '../shared/logged-in-guard.service';
import {EngagementFormComponent} from './engagement.form.component';

export const routes = [
  {path: 'engagement', component: EngagementListComponent, canActivate: [LoggedInGuard]},
  {path: 'engagement/:id', component: EngagementFormComponent, canActivate: [LoggedInGuard]}
];
