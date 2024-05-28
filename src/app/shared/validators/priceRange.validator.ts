import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function priceRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value)
            return null;

        return (min <= value && value <= max) ? null : { priceRange: true };
    }
}