import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-leaderboardmodal',
  templateUrl: './leaderboardmodal.component.html',
  styleUrls: ['./leaderboardmodal.component.css']
})
export class LeaderboardmodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() leaderBoardHidden!:boolean ;

  @Output() closeLeaderBoard = new EventEmitter();

  closeLeaderBoardClick():void {
    this.closeLeaderBoard.emit();
  }

}
