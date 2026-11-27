import { Injectable } from '@angular/core';
import { CanActivate, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../business-logic/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeRedirectGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): UrlTree {
    const userRole = this.authService.getUserRole();

    if (userRole === 'Company') {
      return this.router.createUrlTree(['/jobs/my-jobs']);
    }

    if (userRole === 'Admin'){
      return this.router.createUrlTree(["/admin-panel"])
    }

    return this.router.createUrlTree(['/jobs']);
  }
}