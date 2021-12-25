import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-howtomodal',
  templateUrl: './howtomodal.component.html',
  styleUrls: ['./howtomodal.component.css']
})
export class HowtomodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() howToHidden!:boolean ;

  @Output() closeHowTo = new EventEmitter();

  closeHowClick() {
    this.closeHowTo.emit();

}

}