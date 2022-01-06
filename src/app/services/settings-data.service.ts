import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Settings {
  sound:string,
  level:string,
}

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  constructor() { }

  getSettings():Observable<Settings>  {
    
    const soundSettingsInLocalStorage = localStorage.getItem("sound");
    const levelSettingsInLocalStorage = localStorage.getItem("level");
    console.log(soundSettingsInLocalStorage)
    const soundSetting = soundSettingsInLocalStorage != null ? soundSettingsInLocalStorage : "off";
    const levelSetting = levelSettingsInLocalStorage != null ? levelSettingsInLocalStorage : "easy";
    const settingsToSend = of({
      sound: soundSetting,
      level: levelSetting,
    })
    return settingsToSend
  }

  setSettings(sound:string, level:string):string {
    
    if ((sound !== "off" && sound !== "on") || (level !== "easy" && level !== "medium" && level !== "hard")) {
      console.log("here")
      return "Error applying settings, faulty values"
    }
    localStorage.setItem("sound", sound); 
    localStorage.setItem("level", level);
    return "Your settings was applied"
  }

}
