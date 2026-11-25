import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing-module';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { SharedModule } from '../../shared/shared-module';
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { AdminDataComponent } from './components/admin-data/admin-data.component';

@NgModule({
  declarations: [
    UserProfilePageComponent,
    CompanyDataComponent,
    UserDataComponent,
    AdminDataComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
