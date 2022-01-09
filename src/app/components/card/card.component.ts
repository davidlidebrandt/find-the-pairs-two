import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() icon!: string;

  frontHidden:boolean = false;
  backHidden:boolean = true;
  perspectiveShown:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  turnCardFront(e:any): void {
    this.perspectiveShown = true;
    setTimeout(() => {
      this.frontHidden = true;
    }, 200);
    setTimeout(() => {
      this.backHidden = false;
    }, 500);

  }

  turnCardBack(e:any) {
    this.perspectiveShown = false;
    setTimeout(() => {
      this.backHidden = true;
    }, 300);
    setTimeout(() => {
      this.frontHidden = false;
    }, 500);
  }

}
