import { Component, OnInit } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  timeLeft!:number;
  score!:number;

  constructor(private game:GameServiceService) { }

  ngOnInit(): void {
    this.game.getNewGame().subscribe((newGameData) => {
      this.timeLeft = newGameData.time;
      this.score = newGameData.score;
    })
  }

}
