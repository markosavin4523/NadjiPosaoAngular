import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing-module';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';
import { FilterFormComponent } from './pages/jobs-page/components/filter-form/filter-form.component';
import { SharedModule } from '../../shared/shared-module';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { MyJobsPageComponent } from './pages/my-jobs-page/my-jobs-page.component';
import { CreateJobPageComponent } from './pages/create-job-page/create-job-page.component';
import { CompanyJobDetailsPageComponent } from './pages/company-job-details-page/company-job-details-page.component';
import { JobDetailsCardComponent } from './components/job-details-card/job-details-card.component';
import { ApplicationsModule } from '../applications/applications-module';

@NgModule({
  declarations: [
    JobsPageComponent,
    SavedJobsPageComponent,
    FilterFormComponent,
    JobsListComponent,
    JobDetailsPageComponent,
    MyJobsPageComponent,
    CreateJobPageComponent,
    CompanyJobDetailsPageComponent,
    JobDetailsCardComponent,
  ],
  imports: [CommonModule, JobsRoutingModule, SharedModule, ApplicationsModule],
})
export class JobsModule {}
