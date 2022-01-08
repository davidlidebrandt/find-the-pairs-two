import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  logInShown:boolean = true;
  userNameToolTipHidden:boolean = true;
  passwordToolTipHidden:boolean = true;
  repeatPasswordToolTipHidden = true;
  
  logInUserName = new FormControl('');
  logInPassword = new FormControl('');
  signUpUserName = new FormControl('');
  signUpPassword = new FormControl('');
  signUpRepeatPassword = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  toggleLogInShown():void {
    this.logInShown = !this.logInShown;
  }

  toggleUsernameToolTip():void {
    this.userNameToolTipHidden = !this.userNameToolTipHidden;
  }

  togglePasswordToolTip():void {
    this.passwordToolTipHidden = !this.passwordToolTipHidden;
  }

  toggleRepeatPasswordToolTip():void {
    this.repeatPasswordToolTipHidden = !this.repeatPasswordToolTipHidden;
  }


}
