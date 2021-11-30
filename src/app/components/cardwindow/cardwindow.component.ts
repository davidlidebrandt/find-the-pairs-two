import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cardwindow',
  templateUrl: './cardwindow.component.html',
  styleUrls: ['./cardwindow.component.css']
})
export class CardwindowComponent implements OnInit {

  icons: string[] = ['favorite', 'favorite', 'thumb_up', 'thumb_up', 'help', 'help', 'lightbulb', 'lightbulb'
  ,'star_rate', 'star_rate', 'pets', 'pets', 'nightlight_round', 'nightlight_round', 'offline_bolt', 'offline_bolt', 'settings_input_hdmi', 'settings_input_hdmi'
]

  shuffleCards(array: string[]) {
    this.icons.sort(() => Math.random() - 0.5);
  }

  constructor() { }

  ngOnInit(): void {
    this.shuffleCards(this.icons) 
  }

}
