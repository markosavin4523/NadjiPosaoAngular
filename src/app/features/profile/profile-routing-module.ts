import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { RoleGuard } from '../../shared/guards/role-guard';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePageComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ["User", "Company", "Admin"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
