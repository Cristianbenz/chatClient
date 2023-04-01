import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ChatAccess } from 'src/app/models/chatAccess';
import { Contact } from 'src/app/models/contact';
import { ApiAuthService } from 'src/app/services/apiAuthService';
import { ApiContactService } from 'src/app/services/apiContactService';
@Component({
  selector: 'search-bar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent {
  private _authService = inject(ApiAuthService);
  private _contactService = inject(ApiContactService);
  @Output() newChat = new EventEmitter<Contact>();
  private _user = this._authService.getUser;
  public name = '';
  public users: Contact[] = [];

  search() {
    if(this.name.trim()) {
      this._contactService.findContact(this.name)
      .subscribe(response => {
        if(response.success === 1) {
          this.users = response.data.filter((contact : ChatAccess) => contact.id !== this._user?.id)
        }
      })
    } else {
      this.users = [];
    }
  }

  addUser({id, name, picture} : Contact) {
    this.newChat.emit({
      id,
      picture,
      name
    })
    this.name = '';
    this.users = []
  }
}