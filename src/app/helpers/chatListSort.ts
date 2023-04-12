import { ChatAccess } from "../models/chatAccess";

export default function SortChats(chatList: Array<ChatAccess>, chat: ChatAccess): Array<ChatAccess>{
  let i = chatList.indexOf(chat);
  while(chatList[i - 1]) {
    const current = chatList[i];
    chatList[i] = chatList[i - 1];
    chatList[i - 1] = current;

    i--
  }
  return chatList;
}