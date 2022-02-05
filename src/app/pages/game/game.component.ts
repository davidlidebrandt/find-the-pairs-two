import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public game:GameServiceService) { }

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
