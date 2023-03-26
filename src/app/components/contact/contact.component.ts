import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact!: Contact;
}