import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';

export interface User {
  isLoggedIn:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user!: Observable<firebase.User | null>

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
   }

  

  login():void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  authState() {
    return this.afAuth.authState;
  }

}
