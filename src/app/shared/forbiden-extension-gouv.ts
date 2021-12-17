
import { ValidationErrors, AbstractControl } from "@angular/forms";

// Check if control value ends with '.gouv' extension
export function forbidenExtensionGouvValidator(control: AbstractControl): ValidationErrors | null {
  // HARD CODED STRING '.gouv' !!!
  const isValid = (control.value as string).endsWith('.gouv');

  if (!isValid) {
    // 'extension' is the error key
    return { 'extension': { value: control.value } };
  } else {
    return null;
  }
};
