import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import { ValidationError } from "@angular/forms/signals";

export const greaterThan = (value: number) : ValidatorFn => {
    return (control: AbstractControl) : ValidationErrors | null => {
        if (control.value === null || control.value === undefined || control.value === '') {
            return null;
        }
        return control.value > value ? null : { greaterThan: true }
    }
}