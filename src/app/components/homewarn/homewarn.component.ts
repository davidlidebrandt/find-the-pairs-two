import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homewarn',
  templateUrl: './homewarn.component.html',
  styleUrls: ['./homewarn.component.css']
})
export class HomewarnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() homeWarnClosed!:boolean ;

  @Output() closeReturnHomeModal = new EventEmitter();

  closeReturnHome() {
    this.closeReturnHomeModal.emit();
  }

}
