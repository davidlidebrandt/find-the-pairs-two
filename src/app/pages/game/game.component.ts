import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';
import { WarningConfirmedPaths } from 'src/app/components/game-warning-modal/game-warning-modal.component';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public game:GameServiceService, public messageService:MessageService) { }

  ngOnInit(): void {
  }

  homeWarnClosed: boolean = true;

  gameWarningClosed:boolean = true;
  warningText:string = "";
  proceedIcon:string = "";
  warningConfirmedPaths = WarningConfirmedPaths;
  warningConfirmedPath: string = "";

  toggleGameWarningModal(warningText="", proceedIcon="",  warningConfirmedPath=""):void {
    this.warningText = warningText;
    this.proceedIcon = proceedIcon;
    this.warningConfirmedPath = warningConfirmedPath;
    this.gameWarningClosed = !this.gameWarningClosed;
  }

  toggleReturnHome() {
    this.homeWarnClosed = !this.homeWarnClosed;
  }

}
