import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeWarnClosed: boolean = true;

  gameWarningClosed:boolean = true;
  warningText:string = "";
  proceedIcon:string = "";
  routerPathHome:boolean = true;

  toggleGameWarningModal(warningText="", proceedIcon="", routerPath=true):void {
    this.warningText = warningText;
    this.proceedIcon = proceedIcon;
    this.routerPathHome = routerPath;
    this.gameWarningClosed = !this.gameWarningClosed;
  }

  toggleReturnHome() {
    this.homeWarnClosed = !this.homeWarnClosed;
  }

}
