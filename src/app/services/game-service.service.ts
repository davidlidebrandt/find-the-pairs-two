import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Game {
  time:number,
  score:number
}

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  getNewGame():Observable<Game> {
    const newGame = of({
      time:100,
      score:1000
    })
    return newGame;
  }
}
