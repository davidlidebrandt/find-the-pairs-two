import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  isLoggedIn:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  getIfUserIsLoggedIn():Observable<User> {
    const userIsLoggedIn = true;
    const userObserver = of({
      isLoggedIn: userIsLoggedIn
    })
    return userObserver;
  }

}
