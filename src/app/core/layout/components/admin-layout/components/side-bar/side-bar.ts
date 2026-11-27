import { Component } from '@angular/core';
import { AuthService } from '../../../../../../shared/business-logic/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  constructor(private authService : AuthService){}
  isGroupOpen = true;
  logout(): void {
    this.authService.logout();
  }
}
