import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getjwtToken(): string | null 
  {
    return localStorage.getItem("jwtToken");
  }

  isAuthenticated(): boolean {
    const token = this.getjwtToken();
    return !!token;
  }
  
  logout(): void {
    localStorage.removeItem("jwtToken");
    this.router.navigate(['/auth/login']);
  }
}
