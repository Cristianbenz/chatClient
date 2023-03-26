import { Component, Input, inject } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ApiAuthService } from 'src/app/services/apiAuthService';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message!: Message;
  private readonly _authService = inject(ApiAuthService);
  public user = this._authService.getUser;
}