import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private message = "";
  hidden = true;
  error = false;

  getCurrentMessage() {
    return this.message
  }

  setCurrentMessage(newMessage:string) {
    this.message = newMessage;
  }

  displayMessage(error = false) {
    this.error = error;
    this.hidden = false;
    setTimeout(()=> {
      this.hidden = true;
    }, 5000)
  }
}
