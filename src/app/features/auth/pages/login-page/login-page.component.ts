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
  ){
    const navigation = this.router.getCurrentNavigation();
    this.messageMail = navigation?.extras.state?.['message'] ?? '';
  }

  hidePassword = signal(true);
  errorMessage = signal<string | null>(null);
  messageMail = '';

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
          this.authService.setJwtToken(response.token);
          this.router.navigate(['/']);
          
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.resetForm();
          this.errorMessage.set(error.error?.message ?? "Login failed. Please try again.");
        }
      });
  }
  resetForm() : void
  {
    this.form.reset();
  }

  getDataToSend() : ICredentials
  {
    const credentials = this.form.getRawValue();
    return {
      username: credentials.username,
      password: credentials.password
    }
  }

  

}
