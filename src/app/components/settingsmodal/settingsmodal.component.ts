import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-settingsmodal',
  templateUrl: './settingsmodal.component.html',
  styleUrls: ['./settingsmodal.component.css']
})
export class SettingsmodalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() settingsHidden!:boolean ;

  @Output() closeModal = new EventEmitter();

  closeModalClick() {
    this.closeModal.emit();
  }

  clickSoundOff():void {
    const soundOffInput = document.getElementById("sound-off");
    if (soundOffInput != null) {
      soundOffInput.click();
    }
    
  }

  clickSoundOn():void {
    const soundOnInput = document.getElementById("sound-on");
    if (soundOnInput != null) {
      soundOnInput.click();
    }
    
  }

  changeSettings($event:any):void {
    $event.preventDefault();
  }

  

}
