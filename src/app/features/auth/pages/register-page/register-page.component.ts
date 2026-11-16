import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterValidation } from '../../validations/user-register-validation';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {

  constructor(public validator : UserRegisterValidation)
  {

  }

  maxDate : Date = new Date();

  form : any = new FormGroup(
    {
      username: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9\_]{3,20}$/)
      ]),
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]{3,12}$/)
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]{3,12}$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("",[
        Validators.minLength(6),
        Validators.required
      ]),
      confirmPassword: new FormControl("", Validators.required),
      dateOfBirth: new FormControl (null, Validators.required),
    },
    { validators : UserRegisterValidation.passwordMatch }
  );

  submit() : void
  {

  }
}
