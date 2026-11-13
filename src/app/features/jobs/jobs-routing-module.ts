import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';

const routes: Routes = [

  {
    path: '',
    component: JobsPageComponent,
  },
  {
    path: 'saved-jobs',
    component: SavedJobsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
