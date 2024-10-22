import { AbstractControl } from "@angular/forms"
import { doesNotMatch } from "assert";

export const PasswordMatchV = (passwordControlName: string,
  confirmPasswordControlName: string) => {
    const validator = (form: AbstractControl) => {
      const passwordControl = form.get(passwordControlName);
      const confirmPasswordControl = form.get(passwordControlName);

      if (!passwordControl || !confirmPasswordControl) return;
      if (passwordControl.value !== confirmPasswordControl.value){
        confirmPasswordControl.setErrors({doesNotMatch: true});
      }else{
        const error = confirmPasswordControl.errors;
        if (!error)  return;
        delete error.doesNotMatch;
        confirmPasswordControl.setErrors(error);
      }
    }
    return validator;
  }