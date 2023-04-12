import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import { NgOptimizedImage } from '@angular/common'

import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/signInForm/signInForm.component';
import { SignUpFormComponent } from './components/signUpForm/signUpForm.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessageComponent } from './components/message/message.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { ChatListComponent } from './components/chatList/chatList.component';
import { ChatAccessComponent } from './components/chatAccess/chatAccess.component';
import { UserPictureComponent } from './components/picture/picture.component';
import { NoCurrentChatComponent } from './components/noCurrentChat/noCurrentChat.component';
import { UserHeaderComponent } from './components/userHeader/userHeader.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    SignInFormComponent,
    AuthComponent,
    HomeComponent,
    ChatComponent,
    ContactComponent,
    MessageComponent,
    SearchBarComponent,
    ChatListComponent,
    ChatAccessComponent,
    UserPictureComponent,
    NoCurrentChatComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
