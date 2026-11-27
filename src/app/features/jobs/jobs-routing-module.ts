import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';
import { RoleGuard } from '../../shared/guards/role-guard';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { flush } from '@angular/core/testing';
import { CreateJobPageComponent } from './pages/create-job-page/create-job-page.component';
import { MyJobsPageComponent } from './pages/my-jobs-page/my-jobs-page.component';
import { CompanyJobDetailsPageComponent } from './pages/company-job-details-page/company-job-details-page.component';

const routes: Routes = [
  {
    path: 'saved-jobs',
    component: SavedJobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['User']
    }
  },
  {
    path: '',
    component: JobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['User']
    }
  },
  {
    path: 'create-job',
    component: CreateJobPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['Company']
    }
  },
  {
    path: 'my-jobs',
    component: MyJobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['Company']
    },

  },
  {
    path: 'my-jobs/:id',
    component: CompanyJobDetailsPageComponent,
    canActivate: [RoleGuard],
    data: { 
      roles: ['Company']
     },
  },
  {
    path: ':id',
    component: JobDetailsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['User']
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule { }
