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

  constructor(private afAuth: AngularFireAuth) { }

  userState!: Observable<firebase.User>

  getIfUserIsLoggedIn():Observable<User> {
    const userIsLoggedIn = false;
    const userObserver = of({
      isLoggedIn: userIsLoggedIn
    })
    return userObserver;
  }

  login():void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  authState() {
    this.afAuth.authState.subscribe((as) => {
      console.log(as)
    })
  }

}
