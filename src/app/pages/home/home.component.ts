import { Component, inject, OnInit } from '@angular/core';
import SortChats from 'src/app/helpers/chatListSort';
import { Chat } from 'src/app/models/chat';
import { ChatAccess } from 'src/app/models/chatAccess';
import { Message } from 'src/app/models/message';
import { ApiAuthService } from 'src/app/services/apiAuthService';
import { ApiChatService } from 'src/app/services/apiChatService';
import { HubService } from 'src/app/services/hubService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public _hubService = inject(HubService);
  private readonly _authService = inject(ApiAuthService);
  private _chatService = inject(ApiChatService);
  private readonly _user = this._authService.getUser;
  public currentChat : Chat | null = null;
  public chats: Array<ChatAccess> = [];

  constructor() {
    this._hubService.hub.on('receiveMessage', this.receiveMessage.bind(this));
  }

  ngOnInit(): void {
    if(this._user) this._hubService.init(this._user.id);
    this._hubService.hub.on('chatRequest', this.getUserChats.bind(this))
    this.getUserChats();
  }

  receiveMessage(message: Message) {
    const CHAT = this.chats.find(chat => chat.id === message.chatId);
    if(CHAT) {
      CHAT.lastMessage = message;
      this.currentChat?.id === message.chatId && this.currentChat.messages.push(message);
      this.chats = SortChats(this.chats, CHAT);
    }
  }

  updateNewMessage(message: Message) {
    if(this.currentChat?.id === message.chatId) {
      this.currentChat.messages.push(message);
    }
    const CHAT = this.chats.find(chat => chat.id === message.chatId)
    if(CHAT) {
      CHAT.lastMessage = message;
      this.chats = SortChats(this.chats, CHAT);
    }
  }

  setChat(selectedChat : Chat) {
    if(!selectedChat.id || selectedChat.id !== this.currentChat?.id) {
      this.currentChat = selectedChat;
    }
  }

  getUserChats() {
    return this._chatService.findUserChats()
      .subscribe(response => {
        if (response.success === 1) {
          const USER_CHATS : Array<ChatAccess> = response.data;
          this.chats = USER_CHATS.reverse();
        }
      });
  }

  addNewChat(newChat: Chat) {
    this.getUserChats()
    this.currentChat = newChat;
  }

}