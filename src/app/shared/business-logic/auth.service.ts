import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) { }

  getJwtToken(): string | null {
    const token = localStorage.getItem('token');

    if (!token || token === 'null' || token === 'undefined' || token.trim() === '') {
      return null;
    }

    return token;
  }

  isAuthenticated(): boolean {
    const token = this.getJwtToken();
    return !!token;
  }

  getUserRole(): string {
    return this.getJwtTokenData()?.Role;
  }

  getJwtTokenData(): any {
    let token = this.getJwtToken() ?? "";
    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }

  setJwtToken(token: string): void {
    localStorage.setItem("token", token);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['/auth/login']);
  }
}
