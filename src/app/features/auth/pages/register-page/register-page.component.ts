import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterValidation } from '../../validations/user-register-validation';
import { IRegisterUser } from '../../interfaces/i-register-user';
import { BlRegisterUserRequestService } from '../../business-logic/register/bl-register-user-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {

  constructor(
    public validator : UserRegisterValidation,
    private service : BlRegisterUserRequestService,
    private router : Router
  )
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data = this.getDataToSend();
    this.service.register(data).subscribe({
      next : (response) => {
        this.router.navigate(['/auth/login'], {
        state: { message: 'Registration successfull, check your email and verify your account, activation link duration is 5 minutes.' }
      });
      },
      error : (error) =>
      {
        console.log(error);
        if (Array.isArray(error.error)) {
        this.validator.setApiErrors(this.form, error.error);
        }
      }
    })

  }

  getDataToSend() : IRegisterUser
  {
    const data = this.form.getRawValue();
    return {
        username : data.username,
        firstName : data.firstName,
        lastName : data.lastName,
        dateOfBirth : data.dateOfBirth,
        email : data.email,
        password : data.password,
        confirmPassword : data.confirmPassword
    }
  }
}
