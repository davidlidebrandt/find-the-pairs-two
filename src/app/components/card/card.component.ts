import { Component, OnInit, Input } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';
import { lastCard } from '../cardwindow/cardwindow.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() icon!: string;
  @Input() disabledCard!:boolean;
  @Input() lastCard!:lastCard;

  currentCard = {
    disabled: this.disabledCard,
  }
  
  
  timeLeft!:number;
  score!:number;
 
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
    this.disabledCard = true;
    if(this.lastCard.name === this.icon) {
      this.lastCard.name = "";
      this.lastCard.disabledCard = {disabled:false}
      console.log("h")
    } else if(this.lastCard.name!== "") {
      this.lastCard.name = "";
      this.disabledCard = false;
      let lastCard = this.lastCard.disabledCard;
      lastCard.disabled = false;
      this.lastCard.disabledCard = {disabled:false}
    } else {
      this.lastCard.name = this.icon;
      this.lastCard.disabledCard = this.currentCard;
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
