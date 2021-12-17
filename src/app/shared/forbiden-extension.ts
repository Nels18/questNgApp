import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function forbidenExtensionValidator(forbidenExtension: string): ValidatorFn {
  // Check if control value ends with extension given in parameter
  return (control: AbstractControl): ValidationErrors | null => {
    // Now tested with extension given as parameter :)
    const isValid = (control.value as string).endsWith(forbidenExtension);

    if (!isValid) {
      // 'extension' is the error key
      return { 'extension': { value: control.value, expected: forbidenExtension} };
    } else {
      return null;
    }
  };
}
