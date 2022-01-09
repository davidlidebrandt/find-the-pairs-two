import { Component, OnInit, Input } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() icon!: string;

  timeLeft!:number;
  score!:number;
  currentCard:string ="";
  lastCard:string = "";
  disabled:boolean = false;

  frontHidden:boolean = false;
  backHidden:boolean = true;
  perspectiveShown:boolean = false;

  constructor(private game:GameServiceService) { }

  ngOnInit(): void {
    this.game.getNewGame().subscribe((newGameData) => {
      this.timeLeft = newGameData.time;
      this.score = newGameData.score;
    })
  }

  turnCardFront(): void {
    if (this.lastCard === this.icon) {
      this.disabled = true;
      this.lastCard = "";
    } else if (this.lastCard !== "") {
      this.lastCard = ""
    } else {
      this.lastCard = this.icon;
    }
    this.perspectiveShown = true;
    setTimeout(() => {
      this.frontHidden = true;
    }, 200);
    setTimeout(() => {
      this.backHidden = false;
    }, 500);

  }

  turnCardBack() {
    this.perspectiveShown = false;
    setTimeout(() => {
      this.backHidden = true;
    }, 300);
    setTimeout(() => {
      this.frontHidden = false;
    }, 500);
  }

}
