import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bestscoresmodal',
  templateUrl: './bestscoresmodal.component.html',
  styleUrls: ['./bestscoresmodal.component.css']
})
export class BestscoresmodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() bestScoresHidden!:boolean ;

  @Output() closeBestScore = new EventEmitter();

  closeBestScoresClick():void {
    this.closeBestScore.emit();
  }

}
