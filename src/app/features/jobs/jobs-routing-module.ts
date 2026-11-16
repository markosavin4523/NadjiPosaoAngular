import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SavedJobsPageComponent } from './pages/saved-jobs-page/saved-jobs-page.component';
import { RoleGuard } from '../../shared/guards/role-guard';

const routes: Routes = [

  {
    path: '',
    component: JobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['User']
    }
  },
  {
    path: 'saved-jobs',
    component: SavedJobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['User']
    }
  },
  {
    path: 'create-job',
    component: JobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['Company']
    }
  },
  {
    path: 'my-jobs',
    component: JobsPageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['Company']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
