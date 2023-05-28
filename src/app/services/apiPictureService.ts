import { Injectable, inject } from '@angular/core';
import { Response } from '../models/response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiPictureService {
  private _api = environment.apiUrl + '/api';
  private readonly _http = inject(HttpClient);

  uploadAvatar(userId: number, image: FormData): Observable<Response> {
    return this._http.post<Response>(`${this._api}/Image/${userId}`, image);
  }
}