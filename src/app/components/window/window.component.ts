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

  settingsHidden: boolean = true;

  toggleSettings() {
    this.settingsHidden = !this.settingsHidden;
    this.toggleMainWindowHidden();
  }

  hoveredStartGame: boolean = false;

  animateStartGame() {
    this.hoveredStartGame = !this.hoveredStartGame;
  }

  hoveredSettings: boolean = false;

  animateSettings() {
    this.hoveredSettings = !this.hoveredSettings;
  }

  hoveredHelp: boolean = false;

  animateHelp() {
    this.hoveredHelp = !this.hoveredHelp;
  }

  hoveredLeaderBoard: boolean = false;

  animateLeaderBoard() {
    this.hoveredLeaderBoard = !this.hoveredLeaderBoard;
  }

  hoveredScores: boolean = false;

  animateScores() {
    this.hoveredScores = !this.hoveredScores;
  }

  hoveredLogo: boolean = false;

  animateLogo() {
    this.hoveredLogo = !this.hoveredLogo;
  }

}
