import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BaseRegisterValidation {
  getErrorMessage(control : AbstractControl | null, fieldName : string) : string
  {
    if (!control || !control.errors) {
      return '';
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
