import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { User, UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {
  canActivatePath!:boolean;

  constructor(public authService:UserAuthService, public router:Router) { }

  canActivate():boolean {
    this.authService.user.subscribe((user)=> {
      this.canActivatePath = user? true : false;
    })
    return this.canActivatePath
  }
}
