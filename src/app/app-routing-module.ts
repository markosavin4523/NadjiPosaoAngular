import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './core/layout/components/main-layout/main-layout';
import { AuthLayoutComponent } from './core/layout/components/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { GuestGuard } from './shared/guards/guest-guard';
import { HomeRedirectGuard } from './shared/guards/home-redirect-guard';
import { UserProfilePageComponent } from './features/profile/pages/user-profile-page/user-profile-page.component';
import { RoleGuard } from './shared/guards/role-guard';
import { AdminLayout } from './core/layout/components/admin-layout/admin-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [HomeRedirectGuard],
        children: [],
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        loadChildren: () => import('./features/jobs/jobs-module').then(m => m.JobsModule)
      },
      {
        path: 'applications',
        loadChildren: () => import('./features/applications/applications-module').then(m => m.ApplicationsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile-module').then(m => m.ProfileModule),

      },

    ]
  },
  {
    path: 'admin-panel',
    component: AdminLayout,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['Admin']
    },
    children: [
      {
        path: "",
        loadChildren: () => import('./features/admin-panel/admin-panel-module').then(m => m.AdminPanelModule),
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule),
    component: AuthLayoutComponent,
    canActivateChild: [GuestGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
