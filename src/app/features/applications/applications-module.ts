import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing-module';
import { JobApplyFormComponent } from './components/job-apply-form/job-apply-form.component';
import { MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared-module';
import { MyApplicationsPageComponent } from './pages/my-applications-page/my-applications-page.component';

@NgModule({
  declarations: [JobApplyFormComponent, MyApplicationsPageComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    MatDialogContent,
    MatDialogActions,
    SharedModule,
  ],
})
export class ApplicationsModule {}
