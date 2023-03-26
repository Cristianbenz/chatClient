import { Contact } from "./contact";
import { Message } from "./message";
export interface NewChat {
  id: null;
  destinatary: Contact;
  messages: Array<Message>;
}