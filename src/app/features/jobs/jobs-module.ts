import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing-module';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';
import { FilterFormComponent } from './pages/jobs-page/components/filter-form/filter-form.component';
import { SharedModule } from '../../shared/shared-module';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';

@NgModule({
  declarations: [JobsPageComponent, SavedJobsPageComponent, FilterFormComponent, JobsListComponent],
  imports: [CommonModule, JobsRoutingModule, SharedModule],
})
export class JobsModule {}
