import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from '../../shared/shared-module';
import { RegisterPageCompanyComponent } from './pages/register-page-company/register-page-company.component';
import { PasswordMatInputComponent } from './components/password-mat-input/password-mat-input.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    RegisterPageCompanyComponent,
    PasswordMatInputComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
