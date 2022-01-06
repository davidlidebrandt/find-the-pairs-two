import { Injectable } from '@angular/core';

interface Settings {
  sound:string,
  level:string,
}

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  constructor() { }

  getSettings():Settings {
    
    let soundSettingsInLocalStorage = localStorage.getItem("sound");
    let levelSettingsInLocalStorage = localStorage.getItem("level");
    let soundSetting = soundSettingsInLocalStorage != null ? soundSettingsInLocalStorage : "off";
    let levelSetting = levelSettingsInLocalStorage != null ? levelSettingsInLocalStorage : "easy";

    return {
      sound: soundSetting,
      level: levelSetting,
    }
  }

  setSettings(sound:string, level:string):string {
    console.log("here")
    if ((sound !== "off" || "on") || (level !== "easy" || "medium" || "hard")) {
      return "Error applying settings, faulty values"
    }
    localStorage.setItem("sound", sound);
    localStorage.setItem("level", level);
    return "Your settings was applied"
  }

}
