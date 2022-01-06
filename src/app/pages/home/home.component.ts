import { Component, OnInit } from '@angular/core';
import { UserAuthService, User } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo!:User;
  isLoggedIn!:boolean;

  constructor(private userAuthInfo: UserAuthService) { }

  ngOnInit(): void {
    this.userAuthInfo.getIfUserIsLoggedIn().subscribe(data => {
      this.userInfo = data;
    })
    this.isLoggedIn = this.userInfo.isLoggedIn;
  }

}
