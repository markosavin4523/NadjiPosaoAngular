import { Injectable } from '@angular/core';
import { BaseRegisterValidation } from './base-register-validation';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterValidation extends BaseRegisterValidation {

  static passwordMatch(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmControl = group.get('confirmPassword');

    if (!confirmControl || !confirmControl.value) {
      return null;
    }

    if (password !== confirmControl.value) {
      confirmControl.setErrors(
        { ...confirmControl.errors, passwordMismatch: true },
        { emitEvent: false }
      );
      return { passwordMismatch: true };
    }

    if (confirmControl.hasError('passwordMismatch')) {
      const { passwordMismatch, ...otherErrors } = confirmControl.errors || {};
      confirmControl.setErrors(
        Object.keys(otherErrors).length > 0 ? otherErrors : null,
        { emitEvent: false }
      );
    }

    return null;
  }

  override getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (!control || !control.errors) {
      return '';
    }
    if (control.hasError('matDatepickerMax')) {
      return 'Date of birth cannot be in the future.';
    }
    return super.getErrorMessage(control, fieldName);
  }
}
