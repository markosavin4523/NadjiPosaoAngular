import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RangeSalaryValidator {
  static salaryCheck(group: AbstractControl): ValidationErrors | null {
    const salaryFromVal = group.get('salaryFrom')?.value;
    const salaryTo = group.get('salaryTo');

    if (!salaryFromVal || !salaryTo?.value) {
      return null;
    }

    if (salaryFromVal > salaryTo?.value) {
      salaryTo.setErrors(
        { ...salaryTo.errors, salaryRange: true },
        { emitEvent: false }
      );
      return { salaryRange: true };
    }

    if (salaryTo.hasError('salaryRange')) {
      const { salaryRange, ...otherErrors } = salaryTo.errors || {};
      salaryTo.setErrors(
        Object.keys(otherErrors).length > 0 ? otherErrors : null,
        { emitEvent: false }
      );
    }

    return null;
  }
}