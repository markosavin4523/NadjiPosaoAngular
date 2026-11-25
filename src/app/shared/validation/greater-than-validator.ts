import { AbstractControl } from "@angular/forms"

export const reaterThan = (value : number) => {
    return (control : AbstractControl) => {
        return control.value > value ? null : {greaterThan : true}
    }
}