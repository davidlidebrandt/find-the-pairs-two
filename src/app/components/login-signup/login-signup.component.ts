import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';


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
  constructor(private userAuth: UserAuthService) { 
    this.userAuth.authState();
  }
  
  logInShown:boolean = true;

  logInForm = new FormGroup({
    logInUserName: new FormControl('', Validators.required),
    logInPassword: new FormControl('', Validators.required),
  })

  logInFormUserName = this.logInForm.controls.logInUserName;
  logInFormPassword = this.logInForm.controls.logInPassword;

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
    if(inputFieldControl === this.passwordRepeatSignUpInputField && inputFieldControl.value !== this.passwordSignUpInputField.value) {
      inputHelpText.text = "Passwords do not match"
      return
    }
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

  login():void {
    this.userAuth.login();
    this.userAuth.authState();
  }

  logInWithEmailAndPassword(email:string, password:string) {
    this.userAuth.logInWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.userAuth.logout();
    this.userAuth.authState();
  }

  signUp(email:string, password: string) {
    this.userAuth.signUp(email, password);
  }

  toggleLogInShown():void {
    this.logInShown = !this.logInShown;
  }

  toggleUsernameToolTip(hidden:boolean):void {
    if(this.signUpUserNameHelpText.text !== "") this.signUpUserNameHelpText.hidden = hidden;
    else this.signUpUserNameHelpText.hidden = true;
  }

  togglePasswordToolTip(hidden:boolean):void {
    if(this.signUpPasswordHelpText.text !== "") this.signUpPasswordHelpText.hidden = hidden;
    else this.signUpPasswordHelpText.hidden = true;
  }

  toggleRepeatPasswordToolTip(hidden:boolean):void {
    if(this.signUpUserRepeatPasswordHelpText.text !== "") this.signUpUserRepeatPasswordHelpText.hidden = hidden;
    else this.signUpUserRepeatPasswordHelpText.hidden = true;
  }


}
