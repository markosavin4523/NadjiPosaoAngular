import { Component, signal } from '@angular/core';
import { BlLoginRequestService } from '../../business-logic/login/bl-login-request.service';
import { AuthService } from '../../../../shared/business-logic/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICredentials } from '../../interfaces/icredentials';


@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(
    private requestService : BlLoginRequestService,
    private authService : AuthService,
    private router : Router,
  ){}

  hidePassword = signal(true);

  form : any = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      password: new FormControl("",Validators.required)
    }
  );



  submit() : void
  {
      const credentials = this.getDataToSend();

      this.requestService.login(credentials).subscribe({
        next: (response) => {
          localStorage.setItem("jwtToken", response.jwtToken);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
  }

  getDataToSend() : ICredentials
  {
    const credentials = this.form.getRawValue();
    return {
      username: credentials.username,
      password: credentials.password
    }
  }

  clickEvent(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

}
