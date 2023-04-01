import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HubService {
  public hub: HubConnection;
  constructor() {
    this.hub = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/chat`)
      .build();
  }

  init(userId: number) {
    this.hub
      .start()
      .then(() => {
        this.hub.send('AddUser', userId);
      })
      .catch();
  }

  disconnect() {
    this.hub.stop();
  }
}
