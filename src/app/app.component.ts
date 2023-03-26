import { Component, inject } from '@angular/core';
import { User } from './models/user';
import { ApiAuthService } from './services/apiAuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private authService = inject(ApiAuthService);
  public user: User | null = null;

  constructor() {
    this.authService.user.subscribe(data => this.user = data)
  }

  
}
