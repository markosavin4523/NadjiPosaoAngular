import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from '../jobs/pages/jobs-page/jobs-page.component';
import { RoleGuard } from '../../shared/guards/role-guard';

const routes: Routes = [
  {
    path: '',
    component: JobsPageComponent,
    canActivate: [RoleGuard],
    data: {
          roles: ['User']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
