import { Component, OnInit } from '@angular/core';
import { SettingsDataService, Settings } from 'src/app/services/settings-data.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  soundOn!: boolean;
  level!: string;
  currentSettings!:Settings;

  constructor(private settings: SettingsDataService) {
  }

  ngOnInit(): void {
    this.settings.getSettings().subscribe(settings => {
      this.currentSettings = settings;
    }); 
    this.soundOn = this.currentSettings["sound"] === "on" ? true : false;
    this.level = this.currentSettings["level"];
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

  toggleSound(value:boolean) {
    this.soundOn = value;
  }

}
