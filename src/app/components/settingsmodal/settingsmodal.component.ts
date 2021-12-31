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
    const soundOffInput = document.querySelector("#sound-off");
    if (soundOffInput != null) {
      soundOffInput.setAttribute("checked", "true")
    }
    
  }

}
