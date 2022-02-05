import { Component, OnInit } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  score!:number;
  animationFrame!:any;
  lastDate:any = Date.now();
  currentDate!:any;

  constructor(public game:GameServiceService) { 
    this.animationFrame = requestAnimationFrame(() => {
      this.displayTime();
    });
  }
 
  ngOnInit(): void {
  }

  displayTime() {
    this.currentDate = Date.now();
    if (this.currentDate - this.lastDate > 1000) {
      this.game.subtractTime();
      this.lastDate = this.currentDate;
    }
    requestAnimationFrame(() => { 
      this.displayTime();
    })
  }

  timeRunningOut: boolean = false;

}
