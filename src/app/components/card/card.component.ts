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

  turnCardFront(e:any): void {
    this.perspectiveShown = true;
    setTimeout(() => {
      this.frontHidden = true;
    }, 200);
    setTimeout(() => {
      this.backHidden = false;
    }, 500);

  }

  turnCardBack(e:any) {
    this.perspectiveShown = false;
    setTimeout(() => {
      this.backHidden = true;
    }, 300);
    setTimeout(() => {
      this.frontHidden = false;
    }, 500);
  }

}
