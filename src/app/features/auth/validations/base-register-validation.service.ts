import { Injectable } from '@angular/core';
import { BaseValidationService } from '../../../shared/validation/validation-messages/base-validation.service';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BaseRegisterValidationService extends BaseValidationService {
  override getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (control?.hasError('passwordMismatch')) {
      return 'Passwords do not match.';
    }

    return super.getErrorMessage(control, fieldName);
  }

  protected override getPatternMessage(fieldName: string): string | null {
    if (fieldName === 'Username') {
      return 'Username can contain only letters, numbers, and underscores.';
    }

    return super.getPatternMessage(fieldName);
  }
}
