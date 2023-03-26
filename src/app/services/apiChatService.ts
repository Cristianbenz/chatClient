import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "../models/response";
import { User } from "../models/user";
import { ApiAuthService } from "./apiAuthService";

@Injectable({
  providedIn: 'root'
})
export class ApiChatService {
  private readonly _http = inject(HttpClient)
  private readonly _url = 'http://localhost:5196/api/Chat';
  private authService = inject(ApiAuthService);
  private _user : User | null = null;
  private _httpOptions = {
    headers: new HttpHeaders({
      content: 'application/json'
    })
  }

  constructor() {
    this.authService.user.subscribe(data => this._user = data)
  }

  createChat(destinataryId: number): Observable<Response> {
    const BODY = {
      usersId: [
        this._user?.id,
        destinataryId
      ]
    }
    return this._http.post<Response>(`${this._url}/CreateChat`, BODY, this._httpOptions)
  }

  findUserChats(): Observable<Response> {
    return this._http.get<Response>(`${this._url}/GetUserChats/${this._user?.id}`);
  }

  getChatById(chatId : number) : Observable<Response> {
    return this._http.get<Response>(`${this._url}/GetById/${chatId}/${this._user?.id}`)
  }
}