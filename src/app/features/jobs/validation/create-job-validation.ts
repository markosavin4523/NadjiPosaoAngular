import { AbstractControl } from "@angular/forms";
import { BaseValidationService } from "../../../shared/validation/validation-messages/base-validation.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CreateJobValidator extends BaseValidationService {
    override getErrorMessage(control: AbstractControl | null, fieldName: string): string {
        if (!control || !control.errors) {
            return '';
        }

        if (control.hasError('greaterThan')) {
            return `${fieldName} must be greater than 0.`;
        }
        if (control.hasError('notInPast')) {
            return `${fieldName} must be in future.`;
        }

        if (control.hasError("salaryRange")){
            return "Salary from cannot be greater than salary to.";
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
