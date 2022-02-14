import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor(private auth: UserAuthService) { }

  ngOnInit(): void {
  }

  logout():void {
    this.auth.logout();
  }

  mainWindowHidden: boolean = false;

  toggleMainWindowHidden() {
    this.mainWindowHidden = !this.mainWindowHidden;
  }

  homeModalHidden:boolean = true;
  animateButton:string = "";
  template:string = "";
  title:string = "";

  toggleAnimateButton(buttonName:string="") {
    this.animateButton = buttonName;
  }

  toggleHomeModal(title:string, template:string) {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    this.title = title;
    this.template = template;
    this.homeModalHidden = !this.homeModalHidden;
    this.toggleMainWindowHidden();
  }

  hoveredLogo: boolean = false;

  animateLogo():void {
    this.hoveredLogo = !this.hoveredLogo;
  }

}
