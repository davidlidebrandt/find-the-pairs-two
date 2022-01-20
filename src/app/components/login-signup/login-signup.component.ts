import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  constructor() { }
  
  logInShown:boolean = true;
  userNameToolTipHidden:boolean = true;
  passwordToolTipHidden:boolean = true;
  repeatPasswordToolTipHidden = true;

  logInForm = new FormGroup({
    logInUserName: new FormControl('', Validators.required),
    logInPassword: new FormControl('', Validators.required),
  })

  signUpForm = new FormGroup({
    signUpUserName: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    signUpPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    signUpRepeatPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  })

  userNameSignUpInputField = this.signUpForm.controls.signUpUserName;
  passwordSignUpInputField = this.signUpForm.controls.signUpPassword;
  passwordRepeatSignUpInputField = this.signUpForm.controls.signUpRepeatPassword;

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
