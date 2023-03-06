import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms"

import { MatInputModule } from "@angular/material/input"

import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/signInForm/signInForm.component';
import { SignUpFormComponent } from './components/signUpForm/signUpForm.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    SignInFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
