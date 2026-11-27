import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing-module';
import { UserActivityPageComponent } from './pages/user-activity-page/user-activity-page.component';
import { SharedModule } from '../../shared/shared-module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';

@NgModule({
  declarations: [
    UserActivityPageComponent,
    UsersPageComponent,
    CategoriesPageComponent,
  ],
  imports: [CommonModule, AdminPanelRoutingModule, SharedModule],
})
export class AdminPanelModule {}
