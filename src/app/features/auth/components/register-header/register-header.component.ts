import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-header',
  standalone: false,
  templateUrl: './register-header.component.html',
  styleUrl: './register-header.component.scss',
})
export class RegisterHeaderComponent {
  @Input() fallbackRoute = '/';

  constructor(
    private location: Location,
    private router: Router
  ) {}

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate([this.fallbackRoute]);
    }
  }
}
