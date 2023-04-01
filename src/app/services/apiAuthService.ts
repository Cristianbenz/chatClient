import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from "rxjs";

import { Response } from "../models/response";
import { SingUpRequest } from "../models/singUpRequest";
import { SignInRequest } from "../models/singInRequest";
import { User } from "../models/user";
import { HubService } from "./hubService";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  private readonly _http = inject(HttpClient);
  private readonly _hubService = inject(HubService);
  private readonly url = `${environment.apiUrl}/api/Auth`
  private httpOptions = {
    headers: new HttpHeaders({
      content: 'application/json'
    })
  }

  private userSubject!: BehaviorSubject<User | null>;
  public user : Observable<User | null>;

  public get getUser() {
    return this.userSubject.value
  }

  constructor() {
    const USER = window.localStorage.getItem('user') || null
    this.userSubject = new BehaviorSubject<User | null>(USER ? JSON.parse(USER) : null);
    this.user = this.userSubject.asObservable();
  }

  signUp(request: SingUpRequest): Observable<Response> {
    return this._http.post<Response>(`${this.url}/SignUp`, request, this.httpOptions);
  }

  signIn(request: SignInRequest): Observable<Response> {
    return this._http.post<Response>(`${this.url}/SignIn`, request , this.httpOptions)
    .pipe(
      map(response => {
        if (response.success === 1) {
          const USER : User = response.data;
          window.localStorage.setItem("user", JSON.stringify(USER));
          this.userSubject.next(USER);
        }
        return response;
      })
    )
  }

  signOut() {
    window.localStorage.removeItem("user");
    this.userSubject.next(null);
    this._hubService.disconnect();
  }
}