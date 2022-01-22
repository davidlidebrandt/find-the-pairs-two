import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

interface Error {
    'text':string,
    'hidden':boolean
}
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

  signUpUserNameHelpText:Error = {
    text: '6-12 characters, at least one number one lowercase and one uppercase letter',
    hidden: true
  }

  signUpPasswordHelpText:Error = {
    text: '6-12 characters, at least one number one lowercase and one uppercase letter',
    hidden: true
  }
  signUpUserRepeatPasswordHelpText:Error = {
    text: 'Please enter your chosen password again',
    hidden: true
  }

  inputFieldChanged(inputFieldControl: AbstractControl, inputHelpText:Error):void {
    if(inputFieldControl.value === "" && inputFieldControl === this.passwordRepeatSignUpInputField) {
      inputHelpText.text = 'Please enter your chosen password again';
      return
    } else if(inputFieldControl.value === "") {
      inputHelpText.text = '6-12 characters, at least one number one lowercase and one uppercase letter';
      return
    }
    if(!inputFieldControl.errors) {
      inputHelpText.text = "";
      inputHelpText.hidden = true;
      return
    } else inputHelpText.hidden = false;
    
    let minLengthError = inputFieldControl.errors?.hasOwnProperty("minlength");
    let maxLengthError = inputFieldControl.errors?.hasOwnProperty("maxlength");
    
    if(minLengthError && inputFieldControl === this.userNameSignUpInputField
      ) {
      inputHelpText.text = "Your username is too short"
    } else if(minLengthError) {
      inputHelpText.text = "Your password is too short"
    }
    
    if(maxLengthError && inputFieldControl === this.userNameSignUpInputField) {
      inputHelpText.text = "Your username is too long"
    } else if(maxLengthError) {
      inputHelpText.text = "Your password is too long"
    }
  }

  ngOnInit(): void {
  }

  toggleLogInShown():void {
    this.logInShown = !this.logInShown;
  }

  toggleUsernameToolTip():void {
    this.signUpUserNameHelpText.hidden = !this.signUpUserNameHelpText.hidden;
  }

  togglePasswordToolTip():void {
    this.signUpPasswordHelpText.hidden = !this.signUpPasswordHelpText.hidden;
  }

  toggleRepeatPasswordToolTip():void {
    this.signUpUserRepeatPasswordHelpText.hidden = !this.signUpUserRepeatPasswordHelpText.hidden;
  }


}
