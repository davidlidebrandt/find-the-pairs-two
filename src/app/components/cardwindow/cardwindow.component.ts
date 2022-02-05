import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface icon {
  name:string,
  disabledCard:boolean
}

export interface lastCard {
  name: string,
  disabledCard:{disabled:boolean}
}

@Component({
  selector: 'app-cardwindow',
  templateUrl: './cardwindow.component.html',
  styleUrls: ['./cardwindow.component.css']
})
export class CardwindowComponent implements OnInit {

@ViewChildren('childCards') components!:QueryList<CardComponent>;
lastCard:lastCard = {name: "", disabledCard: {disabled:false}};
allDisabled:boolean = false;
foundCards:string[] = [];
favorite:boolean = true;
group_work:boolean = true;
filter_alt:boolean = true;
lightbulb:boolean = true;
star_rate:boolean = true;
pets:boolean = true;
pending:boolean = true;
offline_bolt:boolean = true;
settings_input_hdmi:boolean = true;

icons: icon[] = [
  {name:'favorite', disabledCard:this.favorite}, {name:'favorite', disabledCard:this.favorite}, 
  {name:'group_work', disabledCard:this.group_work}, {name:'group_work', disabledCard:this.group_work},
  {name:'filter_alt', disabledCard:this.filter_alt}, {name:'filter_alt', disabledCard:this.filter_alt},
  {name:'lightbulb', disabledCard:this.lightbulb}, {name:'lightbulb', disabledCard:this.lightbulb},
  {name:'star_rate', disabledCard:this.star_rate}, {name:'star_rate', disabledCard:this.star_rate},
  {name:'pets', disabledCard:this.pets}, {name:'pets', disabledCard:this.pets},
  {name:'pending', disabledCard:this.pending}, {name:'pending', disabledCard:this.pending},
  {name:'offline_bolt', disabledCard:this.offline_bolt}, {name:'offline_bolt', disabledCard:this.offline_bolt},
  {name:'settings_input_hdmi', disabledCard:this.settings_input_hdmi}, {name:'settings_input_hdmi', disabledCard:this.settings_input_hdmi}, 
]

  shuffleCards(array: icon[]) {
    this.icons.sort(() => Math.random() - 0.5);
  }

  disableAllCards():void {
      this.allDisabled = true;
  }

  turnBackNotFoundCards():void {
    this.components.forEach((component)=> {
      if(!this.foundCards.includes(component.icon)) component.turnCardBack();
    });
    this.allDisabled = false;
  }

  addCardToFoundCardsArray(icon:any):void {
    this.foundCards.push(icon.name);
    this.allDisabled = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.shuffleCards(this.icons) 
  }

}
