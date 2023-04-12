import { AbstractControl } from "@angular/forms"

const validations = {
  getEmailError(control: AbstractControl) {
    if(control.hasError('required')) return 'Required field'

    return 'Not a valid email'
  },
  getNameError(control: AbstractControl) {
    if(control.hasError('required')) return 'Required field'

    return 'At least 4 characters required'
  },
  getPasswordError(control: AbstractControl) {
    if(control.hasError('required')) return 'Required field'

    return 'The password must be at least 8 characters in length, must have at least one uppercase letter, at least one lowercase letter, at least one number and at least one special characters'
  },
  getConfirmPasswordError(control: AbstractControl) {
    if(control.hasError('required')) return 'Required field' 

    return 'The password must match';
  }
}

export default validations