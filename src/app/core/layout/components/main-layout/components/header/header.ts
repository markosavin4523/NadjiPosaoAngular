import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../../../shared/business-logic/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  role: string | null;
  username: string | null;
  constructor(private authService: AuthService) {
    this.role = this.authService.getUserRole();
    this.username = this.authService.getJwtTokenData()?.Username ?? null;
  }
  

  logout(): void {
    this.authService.logout();
  }
}
