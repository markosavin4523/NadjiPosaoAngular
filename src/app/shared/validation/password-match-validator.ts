import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordMatchValidator {
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
}