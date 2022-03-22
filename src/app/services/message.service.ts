import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private message = ""

  getCurrentMessage() {
    return this.message
  }

  setCurrentMessage(newMessage:string) {
    this.message = newMessage;
  }
}
