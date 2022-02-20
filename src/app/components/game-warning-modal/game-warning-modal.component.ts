import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum WarningConfirmedPaths {
  HOME = "home",
  RESTART_GAME = "restart game",
  LOG_OUT = "log out"
}

@Component({
  selector: 'app-game-warning-modal',
  templateUrl: './game-warning-modal.component.html',
  styleUrls: ['./game-warning-modal.component.css']
})
export class GameWarningModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() gameWarningClosed!:boolean;
  @Input() warningText!:string;
  @Input() proceedIcon!:string;
  @Input() routerPathHome!: string;

  @Output() closeGameWarningModal = new EventEmitter();

  closeGameWarning():void {
    this.closeGameWarningModal.emit();
  }

  proceedButtonHovered:boolean = false;

  animateProceedButton():void {
    this.proceedButtonHovered = !this.proceedButtonHovered;
  }

  cancelButtonHovered:boolean = false;

  animateCancelButton():void {
    this.cancelButtonHovered = !this.cancelButtonHovered;
  }

}



