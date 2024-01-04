import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  triggerNotification(message: string) {
    window.alert(message);
  }
}
