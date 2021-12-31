import { ThrowStmt } from '@angular/compiler';
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

  closeReturnHome():void {
    this.closeReturnHomeModal.emit();
  }

  returnHomeButtonHovered:boolean = false;

  animateReturnHomeButton():void {
    this.returnHomeButtonHovered = !this.returnHomeButtonHovered;
  }

  cancelReturnHomeButtonHovered:boolean = false;

  animateCancelHome():void {
    this.cancelReturnHomeButtonHovered = !this.cancelReturnHomeButtonHovered;
  }

}
