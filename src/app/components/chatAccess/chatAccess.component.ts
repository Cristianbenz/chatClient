import { Component, Input } from "@angular/core";
import { ChatAccess } from "src/app/models/chatAccess";

@Component({
  selector: 'chat-access',
  templateUrl: './chatAccess.component.html',
  styleUrls: ['./chatAccess.component.scss']
})
export class ChatAccessComponent {
  @Input() chat! : ChatAccess;
}