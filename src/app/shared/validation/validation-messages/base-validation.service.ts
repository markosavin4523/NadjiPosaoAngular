import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IApiValidationError } from '../../interfaces/i-api-validation-error';


@Injectable({ providedIn: 'root' })
export class BaseValidationService {
  setApiErrors(form: FormGroup, errors: IApiValidationError[]): void {
    if (!Array.isArray(errors)) {
      return;
    }

    errors.forEach((err) => {
      const controlName = err.propertyName.charAt(0).toLowerCase() + err.propertyName.slice(1);
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

  getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (!control || !control.errors) {
      return '';
    }

    if (control.hasError('apiError')) {
      return control.getError('apiError');
    }
    if (control.hasError('required')) {
      return `${fieldName} is required.`;
    }
    if (control.hasError('email')) {
      return 'Email must be in a valid format.';
    }
    if (control.hasError('minlength')) {
      const min = control.getError('minlength').requiredLength;
      return `${fieldName} must be at least ${min} characters.`;
    }
    if (control.hasError('pattern')) {
      return this.getPatternMessage(fieldName) ?? `${fieldName} format is invalid.`;
    }

    return 'Invalid input.';
  }

  protected getPatternMessage(fieldName: string): string | null {
    return null;
  }
}