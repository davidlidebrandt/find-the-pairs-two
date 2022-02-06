import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SettingsDataService } from './settings-data.service';

export interface Game {
  time:number,
  score:number,
  lost:boolean
}

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  constructor(private settings:SettingsDataService) { }

  game:Game = {time:100, score:0, lost:false};

  //Not used
  getNewGame():Observable<Game> {
    const newGame = of(this.game)
    return newGame;
  }

  getGame():Game {
    return this.game;
  }

  subtractTime():Game {
    this.game.time -= 1;
    if(this.game.time <= 0) {
      this.game.lost = true;
    }
    return this.game;
  }

  addTime():Game {
    let calculateAddedTime = 1;
    this.settings.getSettings().subscribe((setting)=> {
      this.settings.getSettings().subscribe((setting) => {
        if(setting.level === 'easy') calculateAddedTime = 20;
        if(setting.level === 'medium') calculateAddedTime = 15;
        if(setting.level === 'hard') calculateAddedTime = 10;
      });
    })
    this.game.time += calculateAddedTime;
    return this.game;
  }

  addScore():Game {
    let level = 0;
    this.settings.getSettings().subscribe((setting) => {
      if(setting.level === 'easy') level = 1;
      if(setting.level === 'medium') level = 2;
      if(setting.level === 'hard') level = 3;
    });
    console.log(level)
    this.game.score = level * this.game.time;
    return this.game;
  }
  
}
