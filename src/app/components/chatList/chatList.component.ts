import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Contact } from 'src/app/models/contact';
import { ChatAccess } from 'src/app/models/chatAccess';
import { ApiMessageService } from 'src/app/services/apiMessageService';
import { HubService } from 'src/app/services/hubService';
import { Message } from 'src/app/models/message';
@Component({
  selector: 'chat-list',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent {

  private messageService = inject(ApiMessageService);
  private _hubService = inject(HubService);
  @Output() selectChat = new EventEmitter<Chat>();
  @Input() chats: ChatAccess[] = [];

  constructor() {
    this._hubService.hub.on('receiveMessage', this.receiveMessage.bind(this))
    
  }

  receiveMessage(message: Message) {
    console.log(this.chats)
    const CHAT = this.chats.find(chat => chat.id === message.chatId);
    if(CHAT) {
      CHAT.lastMessage = message;
    }
  }

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