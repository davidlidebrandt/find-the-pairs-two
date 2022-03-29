import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

export interface User {
  isLoggedIn:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user!: Observable<firebase.User | null>

  constructor(private afAuth: AngularFireAuth, private messageService: MessageService) {
    this.user = this.afAuth.authState;
   }


  login():void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(()=> {
      this.messageService.setCurrentMessage("Successfully logged in!");
      this.messageService.displayMessage();
    });
   
  }

  logInWithEmailAndPassword(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.messageService.setCurrentMessage("Successfully logged in!");
        this.messageService.displayMessage();
      })
      .catch(error => {
        this.messageService.setCurrentMessage("Something went wrong:" + error.message)
        this.messageService.error = true;
        this.messageService.displayMessage();
      });
  }

  signUp(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        this.messageService.setCurrentMessage("Successfully signed up!");
        this.messageService.displayMessage();
      })
      .catch(error => {
        this.messageService.setCurrentMessage("Something went wrong:" + error.message)
        this.messageService.error = true;
        this.messageService.displayMessage();
      });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  authState() {
    return this.afAuth.authState;
  }

}
