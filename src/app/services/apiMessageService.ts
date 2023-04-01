import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../models/message";
import { Response } from "../models/response";
import { SendMessageRequest } from "../models/sendMessageRequest";
import { ApiAuthService } from "./apiAuthService";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiMessageService {
  private readonly _http = inject(HttpClient)
  private readonly _authService = inject(ApiAuthService)
  private readonly _user = this._authService.getUser;
  private readonly _url = `${environment.apiUrl}/api/Messages`
  private _httpOptions = {
    headers: new HttpHeaders({
      content: 'application/json'
    })
  }

  sendMessage(request : SendMessageRequest) : Observable<Response> {
    return this._http.post<Response>(`${this._url}/Send`, request, this._httpOptions)
  }

  getMessages(chatId : number) : Observable<Response> {
    return this._http.get<Response>(`${this._url}/GetChatMessages/${chatId}/`)
  }
}