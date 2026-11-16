import { Injectable } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../business-logic/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivateChild(): boolean {
    const isGuest = !this.authService.isAuthenticated();
    if (!isGuest) {
      this.router.navigateByUrl('/');
    }
    return isGuest;
  }
}
