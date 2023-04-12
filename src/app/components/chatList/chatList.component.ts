import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Contact } from 'src/app/models/contact';
import { ChatAccess } from 'src/app/models/chatAccess';
import { ApiMessageService } from 'src/app/services/apiMessageService';
@Component({
  selector: 'chat-list',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent {

  private messageService = inject(ApiMessageService);
  @Output() selectChat = new EventEmitter<Chat>();
  @Input() chats: ChatAccess[] = [];

  getChat({id, destinatary}: ChatAccess) {
    this.messageService.getMessages(id)
    .subscribe(response => {
      if(response.success === 1) {
        this.selectChat.emit({
          id,
          destinatary,
          messages: response.data
        })
      }
    })
  }

  selectNewChat(user : Contact) {
    this.selectChat.emit({
      destinatary: user,
      messages: []
    })
  }
}