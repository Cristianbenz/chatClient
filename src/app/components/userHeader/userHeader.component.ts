import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { ApiAuthService } from 'src/app/services/apiAuthService';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';

@Component({
  selector: 'user-header-component',
  templateUrl: 'userHeader.component.html',
  styleUrls: ['./userHeader.component.scss']
})
export class UserHeaderComponent {
  public user: null | User = null;
  private _authService = inject(ApiAuthService);
  private _dialogRef = inject(MatDialog);
  
  constructor() {
    this._authService.user.subscribe(info => this.user = info)
  }

  signOut() {
    this._authService.signOut()
  }

  openAvatarForm() {
    this._dialogRef.open(AvatarDialogComponent, {
      data: this.user
    })
  }
}