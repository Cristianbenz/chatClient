import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiAuthService } from 'src/app/services/apiAuthService';
import validations from '../../helpers/authValidations';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sign-in-form',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.scss'],
})
export class SignInFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(ApiAuthService);
  private _snackBar = inject(MatSnackBar);
  signInForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  emailError = () =>
    validations.getEmailError(this.signInForm.controls['email']);

  pwdError = () =>
    validations.getPasswordError(this.signInForm.controls['password']);

  signIn() {
    this._authService.signIn(this.signInForm.getRawValue()).subscribe({
      error: (error: HttpErrorResponse) => {
        const label = 'Okey'
                const config = {
                    duration: 500
                }
        if(error.status === 400) this._snackBar.open('Email or password incorrect', label, config);
        else this._snackBar.open('Server error, please try again later', label, config);
      },
    });
  }
}
