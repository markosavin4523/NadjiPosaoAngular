import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IApiValidationError } from '../../../shared/interfaces/i-api-validation-error';

@Injectable({
  providedIn: 'root',
})
export class BaseRegisterValidation {

  setApiErrors(form: FormGroup, errors: IApiValidationError[]): void {
    if (!Array.isArray(errors)) {
      return;
    }

    errors.forEach((err) => {
      const controlName =
        err.propertyName.charAt(0).toLowerCase() + err.propertyName.slice(1);

      const control = form.get(controlName);

      if (control) {
        control.setErrors({
          ...control.errors,
          apiError: err.errorMessage,
        });
        control.markAsTouched();
      }
    });
  }

  getErrorMessage(control : AbstractControl | null, fieldName : string) : string
  {
    if (!control || !control.errors) {
      return '';
    }

    if (control.hasError('apiError')) {
      return control.getError('apiError');
    }

    if (control.hasError("required"))
    {
      return `${fieldName} is required`;
    }
    if (control.hasError("email"))
    {
       return "Email must be in a valid format";
    }
    if (control.hasError("minlength"))
    {
      const min = control.getError('minlength').requiredLength;
      return `${fieldName} must be at least ${min} characters.`;
    }
    if (control.hasError("pattern"))
    {
      let message = `${fieldName} must be in`;
      switch (fieldName)
        {
          case "Username":
            return `${fieldName} can contains only characters, nubmbers and underscore`;
          case "First name":
            return `${message} "Petar" format.`;
          case "Last name":
            return `${message} "Peric" format.`;
        }
    }
    if (control.hasError("passwordMismatch"))
    {
      return "Password do not match"
    }
    return "Invalid";
  }
}
