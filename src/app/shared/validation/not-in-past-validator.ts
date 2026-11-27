import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import { ValidationError } from "@angular/forms/signals"

export const notInPast = () : ValidatorFn => {
    return (control: AbstractControl) : ValidationErrors | null => {
        return control.value > Date.now() ? null : { notInPast: true }
    }
}