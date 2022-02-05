import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Game {
  time:number,
  score:number,
  lost:boolean
}

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  constructor() { }

  game:Game = {time:2, score:1000, lost:false};

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
    this.game.time += 10;
    return this.game;
  }
}
