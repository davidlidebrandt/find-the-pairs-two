import { Component, OnInit } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timeLeft!:number;
  score!:number;
  animationFrame!:any;
  lastDate:any = Date.now();
  currentDate!:any;

  constructor(private game:GameServiceService) { 
    this.animationFrame = requestAnimationFrame(() => {
      this.displayTime();
    });
  }
 
  ngOnInit(): void {
    this.game.getNewGame().subscribe((newGameData) => {
      this.timeLeft = newGameData.time;
      this.score = newGameData.score;
    })
  }

  displayTime() {
    this.currentDate = Date.now();
    if (this.currentDate - this.lastDate > 1000) {
      this.timeLeft --;
      this.lastDate = this.currentDate;
    }
    requestAnimationFrame(() => { 
      this.displayTime();
    })
  }

  timeRunningOut: boolean = false;

}
