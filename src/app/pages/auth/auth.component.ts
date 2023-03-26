import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
 public formType : 'signin' | 'signup' = 'signin';

 changeForm() {
  this.formType = this.formType === 'signin' ? 'signup' : 'signin';
 }
}