import { Component, inject } from '@angular/core';
import { ApiAuthService } from 'src/app/services/apiAuthService';

@Component({
  selector: 'user-header-component',
  templateUrl: 'userHeader.component.html',
  styleUrls: ['./userHeader.component.scss']
})
export class UserHeaderComponent {
  private authService = inject(ApiAuthService);
  
  signOut() {
    this.authService.signOut()
  }
}