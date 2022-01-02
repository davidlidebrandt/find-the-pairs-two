import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-modals',
  templateUrl: './home-modals.component.html',
  styleUrls: ['./home-modals.component.css']
})
export class HomeModalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() homeModalHidden!:boolean;

  @Input() template!:string;

  @Input() title!:string;

  @Output() closeHomeModal = new EventEmitter();

  closeBestScoresClick():void {
    this.closeHomeModal.emit();
  }

}
