import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from '../jobs/pages/jobs-page/jobs-page.component';
import { RoleGuard } from '../../shared/guards/role-guard';
import { MyApplicationsPageComponent } from './pages/my-applications-page/my-applications-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyApplicationsPageComponent,
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
