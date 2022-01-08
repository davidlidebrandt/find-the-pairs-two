import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamewindow',
  templateUrl: './gamewindow.component.html',
  styleUrls: ['./gamewindow.component.css']
})
export class GamewindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() homeWarnClosed!:boolean;

  @Output() openReturnHomeModal = new EventEmitter();

  openReturnHome():void {
    this.openReturnHomeModal.emit();
  }

  @Output() openRestartModal = new EventEmitter();

  openRestart():void {
    this.openRestartModal.emit();
  }

}
