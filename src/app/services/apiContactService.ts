import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

import { environment } from "src/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {
  private http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/api/User`;


  findContact(name: string): Observable<Response> {
    return this.http.get<Response>(`${this.url}/GetByName?name=${name}`);
  }
}