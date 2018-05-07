import {NgModule} from '@angular/core';
import {EngagementListComponent} from './engagement.list.component';
import {RouterModule} from '@angular/router';
import {routes} from './engagement.route';
import {SharedModule} from '../shared/shared.module';
import {EngagementService} from './engagement.service';
import {EngagementFormComponent} from './engagement.form.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    EngagementListComponent,
    EngagementFormComponent
  ],
  providers: [
    EngagementService
  ]
})
export class EngagementModule {
}
