import { Component, OnInit } from '@angular/core';
import { SettingsDataService } from 'src/app/services/settings-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  soundOn!: boolean;
  level!: string;

  constructor(private settings: SettingsDataService) {
    let currentSettings = settings.getSettings(); 
    this.soundOn = currentSettings["sound"] === "on" ? true : false;
    this.level = currentSettings["level"];
  }

  ngOnInit(): void {
  }

  getSettingsFromForm(event:Event) {
    event.preventDefault();
    const settingsForm = document.querySelector("#settings-form") as HTMLFormElement;
    let formData = new FormData(settingsForm);
    let soundOnOrOff = formData.get("sound") as string;
    let level = formData.get("level") as string;
    this.setSettings(soundOnOrOff, level);
   
  }

  setSettings(sound:string, level:string) {
    this.settings.setSettings(sound, level);
  }

}
