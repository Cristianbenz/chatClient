import { Component, Input, inject, OnInit, EventEmitter, Output } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { SendMessageRequest } from 'src/app/models/sendMessageRequest';
import { ApiAuthService } from 'src/app/services/apiAuthService';
import { ApiChatService } from 'src/app/services/apiChatService';
import { ApiMessageService } from 'src/app/services/apiMessageService';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() chat: Chat | null = null;
  @Output() setNewChat = new EventEmitter<Chat>();
  @Output() messageSended = new EventEmitter<Message>();
  private readonly _messageService = inject(ApiMessageService);
  private readonly _chatService = inject(ApiChatService);
  private readonly _authService = inject(ApiAuthService);
  private readonly _user = this._authService.getUser;
  public text: string = '';

  sendMessage() {
    if (this.chat?.id && this._user) {
      const MESSAGE: SendMessageRequest = {
        emisorId: this._user.id,
        destinataryId: this.chat.destinatary.id,
        chatId: this.chat?.id,
        message: this.text,
      };
      this._messageService.sendMessage(MESSAGE).subscribe((response) => {
        if (response.success === 1) {
          this.messageSended.emit(response.data);
        }
      });
    } else if (this.chat && this.text) {
      const TEXT = this.text
      this._chatService
        .createChat(this.chat.destinatary.id)
        .subscribe((response) => {
          if (response.success === 1 && this._user && this.chat) {
            const { destinatary } = this.chat
            const CHAT_ID = response.data.id
            const MESSAGE: SendMessageRequest = {
              emisorId: this._user.id,
              destinataryId: destinatary.id,
              chatId: CHAT_ID,
              message: TEXT,
            };
            this._messageService.sendMessage(MESSAGE).subscribe((response) => {
              if (response.success === 1) {
                this.setNewChat.emit({
                  id: CHAT_ID,
                  destinatary: destinatary,
                  messages: [
                    response.data
                  ]
                })
              }
            });
          }
        });
    }
    this.text = '';
  }
}
