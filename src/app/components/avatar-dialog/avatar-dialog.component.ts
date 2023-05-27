import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { ApiPictureService } from 'src/app/services/apiPictureService';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss']
})
export class AvatarDialogComponent {
  private _pictureService = inject(ApiPictureService);
  private form = new FormData();
  public picture = this.user?.avatar || '';
  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User | null,
  ) {

  }

  async changePhoto(evt: any) {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.picture = reader.result?.toString() as string;
    }
    this.picture = file;
    this.form.delete('picture')
    this.form.append('picture', file);

  }

  submit() {
   if(this.user && this.form.get('picture')) this._pictureService.uploadAvatar(this.user?.id, this.form);
  }
}
