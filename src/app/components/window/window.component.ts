import { ThrowStmt } from '@angular/compiler';
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

  bestScoresHidden:boolean = true;

  toggleBestScores() {
    this.bestScoresHidden = !this.bestScoresHidden;
    this.toggleMainWindowHidden();
  }

  leaderBoardHidden:boolean = true;

  toggleLeaderBoard() {
    this.leaderBoardHidden = !this.leaderBoardHidden;
    this.toggleMainWindowHidden();
  }

  settingsHidden: boolean = true;

  toggleSettings() {
    this.settingsHidden = !this.settingsHidden;
    this.toggleMainWindowHidden();
  }

  howToHidden: boolean = true;

  toggleHowTo() {
    this.howToHidden = !this.howToHidden;
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
