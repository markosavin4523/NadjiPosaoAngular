import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayout } from './components/admin-layout/admin-layout';
import { MainLayout } from './components/main-layout/main-layout';
import { Header } from './components/main-layout/components/header/header';
import { Footer } from './components/main-layout/components/footer/footer';
import { SideBar } from './components/admin-layout/components/side-bar/side-bar';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [AdminLayout, MainLayout, Header, Footer, SideBar, AuthLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class LayoutModule {}
