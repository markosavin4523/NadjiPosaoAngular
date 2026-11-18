import { Injectable } from '@angular/core';
import { BaseRegisterValidationService } from './base-register-validation.service';

@Injectable()
export class CompanyRegisterValidationService extends BaseRegisterValidationService {
  protected override getPatternMessage(fieldName: string): string | null {
    if (fieldName === 'Phone number') {
      return 'Phone number must be in "+xxx xxx xxxxxx" format.';
    }

    return super.getPatternMessage(fieldName);
  }
}