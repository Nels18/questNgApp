import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export function checkEqualityValidator(controlName1: string, controlName2: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // // Get first control value
    // const value1 = control.get(controlName1).value;
    // // Get second control value
    // const value2 = control.get(controlName2).value;

    // if (!(value1 && value2 && value1 === value2)) {
    //   return { 'notEqual': { actual: value1, expected: value2 } };
    // } else {
      return null;
    // }
  };
}
