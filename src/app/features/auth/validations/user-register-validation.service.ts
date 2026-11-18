import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseRegisterValidationService } from './base-register-validation.service';

@Injectable()
export class UserRegisterValidationService extends BaseRegisterValidationService {
  override getErrorMessage(control: AbstractControl | null, fieldName: string): string {
    if (control?.hasError('matDatepickerMax')) {
      return 'Date of birth cannot be in the future.';
    }

    return super.getErrorMessage(control, fieldName);
  }

  protected override getPatternMessage(fieldName: string): string | null {
    switch (fieldName) {
      case 'First name':
        return 'First name must be in "Petar" format.';
      case 'Last name':
        return 'Last name must be in "Peric" format.';
      default:
        return super.getPatternMessage(fieldName);
    }
  }
}