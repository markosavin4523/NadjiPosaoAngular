import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../business-logic/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(): boolean {
    const loggedIn = this.authService.isAuthenticated();
    if (!loggedIn) {
      this.router.navigate(['/auth/login']);
    }
    return loggedIn;
  }
}
