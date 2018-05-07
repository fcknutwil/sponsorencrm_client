import {SponsorListComponent} from './sponsor.list.component';
import {LoggedInGuard} from '../shared/logged-in-guard.service';
import {SponsorFormComponent} from './sponsor.form.component';
import {SponsorEngagementFormComponent} from './sponsor-engagement.form.component';
import {SponsorEngagementListComponent} from './sponsor-engagement.list.component';
import {SponsorBeziehungListComponent} from './sponsor-beziehung.list.component';
import {SponsorBeziehungFormComponent} from './sponsor-beziehung.form.component';
import {DokumentFormComponent} from './dokument.form.component';
import {DokumentListComponent} from './dokument.list.component';
import {LogoListComponent} from './logo.list.component';
import {LogoFormComponent} from './logo.form.component';

export const routes = [
  {path: 'sponsor', component: SponsorListComponent, canActivate: [LoggedInGuard]},
  {
    path: 'sponsor/:id', component: SponsorFormComponent, canActivate: [LoggedInGuard], children:
      [
        {path: 'list', component: SponsorEngagementListComponent, outlet: 'engagement'},
        {path: 'form/:id', component: SponsorEngagementFormComponent, outlet: 'engagement'},
        {path: 'list', component: SponsorBeziehungListComponent, outlet: 'beziehung'},
        {path: 'form/:id', component: SponsorBeziehungFormComponent, outlet: 'beziehung'},
        {path: 'list', component: DokumentListComponent, outlet: 'dokument'},
        {path: 'form/:id', component: DokumentFormComponent, outlet: 'dokument'},
        {path: 'list', component: LogoListComponent, outlet: 'logo'},
        {path: 'form/:id', component: LogoFormComponent, outlet: 'logo'}
      ]
  }
];
