import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cardwindow',
  templateUrl: './cardwindow.component.html',
  styleUrls: ['./cardwindow.component.css']
})
export class CardwindowComponent implements OnInit {

  icons: string[] = ['favorite', 'favorite', 'group_work', 'group_work', 'filter_alt', 'filter_alt', 'lightbulb', 'lightbulb'
  ,'star_rate', 'star_rate', 'pets', 'pets', 'pending', 'pending', 'offline_bolt', 'offline_bolt', 'settings_input_hdmi', 'settings_input_hdmi'
]

  shuffleCards(array: string[]) {
    this.icons.sort(() => Math.random() - 0.5);
  }

  constructor() { }

  ngOnInit(): void {
    this.shuffleCards(this.icons) 
  }

}
