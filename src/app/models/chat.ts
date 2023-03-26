import { Contact } from './contact'
import { Message } from './message';
export interface Chat {
  id?: number;
  destinatary: Contact;
  messages: Array<Message>
}