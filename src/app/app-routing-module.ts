import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './core/layout/components/main-layout/main-layout';
import { AuthLayoutComponent } from './core/layout/components/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./features/jobs/jobs-module').then(m => m.JobsModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule),
    component: AuthLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
