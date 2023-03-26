import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class UserPictureComponent {
  @Input() image: string = '';
}