import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { CompanyRegisterValidationService } from '../../validations/company-register-validation.service';
import { PasswordMatchValidator } from '../../../../shared/validation/password-match-validator';
import { BaseValidationService } from '../../../../shared/validation/validation-messages/base-validation.service';
import { ICity } from '../../../../shared/interfaces/i-city';
import { CitiesService } from '../../../../shared/business-logic/cities.service';
import { IRegisterCompany } from '../../interfaces/i-register-company';
import { BlRegisterCompanyRequestService } from '../../business-logic/register/bl-register-company-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page-company',
  standalone: false,
  templateUrl: './register-page-company.component.html',
  styleUrl: './register-page-company.component.scss',
  providers: [
    { provide: BaseValidationService, useClass: CompanyRegisterValidationService }
  ]
})
export class RegisterPageCompanyComponent {
  constructor(
    public validator: BaseValidationService,
    private cityService: CitiesService,
    private registerService : BlRegisterCompanyRequestService,
    private router : Router
  ) { }

  cities: ICity[] = [];

  form: any = new FormGroup(
    {
      username: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9\_]{3,20}$/)
      ]),
      name: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\+[0-9]{3} [0-9]{3} [0-9]{6,}$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      cityId: new FormControl(null, Validators.required),
      description: new FormControl("", Validators.required),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl("", Validators.required),
    },
    {
      validators: PasswordMatchValidator.passwordMatch
    }
  );

  ngOnInit() {
    this.cityService.getAll().subscribe({
      next: (response) => {
        this.cities = response;
        console.log(this.cities);
      },
      error: (err) => {

      }
    })
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data = this.getDataToSend();
    this.registerService.register(data).subscribe({
      next: (response) => {
        this.router.navigate(['/auth/login'], {
          state: { message: 'Registration successfull, check your email and verify your account, activation link duration is 5 minutes.' }
        });
      },
      error: (error) => {
        console.log(error);
        if (Array.isArray(error.error)) {
          this.validator.setApiErrors(this.form, error.error);
        }
      }
    })
  }

  getDataToSend(): IRegisterCompany {
    const data = this.form.getRawValue();
    return {
      username: data.username,
      name: data.name,
      description: data.description,
      address: data.address,
      cityId: data.cityId,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword
    }
  }
}
