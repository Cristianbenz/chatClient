import { Contact } from './contact'
import { Message } from './message';

export interface ChatAccess {
  id: number;
  destinatary: Contact;
  lastMessage?: Message;
}