import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ApiContactService } from 'src/app/services/apiContactService';
@Component({
  selector: 'search-bar',
  templateUrl: './searchBar.component.html'
})
export class SearchBarComponent {
  private _contactService = inject(ApiContactService);
  @Output() newChat = new EventEmitter<Contact>();
  public name = '';
  public users: Contact[] = [];

  search() {
    if(this.name.trim()) {
      this._contactService.findContact(this.name)
      .subscribe(response => {
        if(response.success === 1) {
          this.users = response.data
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
  }
}