import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from '../../shared/shared-module';
import { RegisterPageComponentComponent } from './pages/register-page-component/register-page-component.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, RegisterPageComponentComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
