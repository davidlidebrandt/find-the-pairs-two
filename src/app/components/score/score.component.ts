import { Component, OnInit } from '@angular/core';
import { GameServiceService, Game } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public game:GameServiceService) { }

  ngOnInit(): void {
  
  }

}
