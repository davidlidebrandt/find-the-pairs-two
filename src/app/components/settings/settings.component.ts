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
  }

  setSettings(sound:string, level:string) {

  }

}
