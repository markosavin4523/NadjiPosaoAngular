import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityPageComponent } from './pages/user-activity-page/user-activity-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

const routes: Routes = [
  {
    path : "",
    component : UserActivityPageComponent,
  },
  {
    path : "users",
    component : UsersPageComponent
  },
  {
    path : "categories",
    component: CategoriesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
