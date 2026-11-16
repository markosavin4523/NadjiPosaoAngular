import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../business-logic/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard  {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(route : ActivatedRouteSnapshot): boolean {
    const allowedRoles : string[] = route.data['roles'] ?? [];
    const userRole = this.authService.getUserRole();
    let isAllowed : boolean = false;

    if (userRole && allowedRoles.includes(userRole)) {
      isAllowed = true;
    }

    if (!isAllowed) {
      this.router.navigate(['/']);
    }

    return isAllowed;
    
  }
}