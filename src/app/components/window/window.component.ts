import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainWindowHidden: boolean = false;

  toggleMainWindowHidden() {
    this.mainWindowHidden = !this.mainWindowHidden;
  }

  homeModalHidden:boolean = true;
  template:string = "";
  title:string = "";


  toggleHomeModal(title:string, template:string) {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    this.title = title;
    this.template = template;
    this.homeModalHidden = !this.homeModalHidden;
    this.toggleMainWindowHidden();
  }

  animateIcon(event:Event) {
    const currentButton = event.target as Element;
    const child = currentButton.querySelector("span");
    child?.classList.toggle("animate-spin");
  }

  hoveredLogo: boolean = false;

  animateLogo():void {
    this.hoveredLogo = !this.hoveredLogo;
  }

}
