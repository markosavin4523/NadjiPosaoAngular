import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing-module';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';

@NgModule({
  declarations: [ JobsPageComponent, SavedJobsPageComponent],
  imports: [CommonModule, JobsRoutingModule],
})
export class JobsModule {}
