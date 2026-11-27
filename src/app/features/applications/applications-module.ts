import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing-module';
import { JobApplyFormComponent } from './components/job-apply-form/job-apply-form.component';
import { SharedModule } from '../../shared/shared-module';
import { MyApplicationsPageComponent } from './pages/my-applications-page/my-applications-page.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';

@NgModule({
  declarations: [
    JobApplyFormComponent,
    MyApplicationsPageComponent,
    CandidatesListComponent,

  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule,
  ],
  exports:[
    JobApplyFormComponent
  ]
})
export class ApplicationsModule {}
