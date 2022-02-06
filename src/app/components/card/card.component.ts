import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {
  GameServiceService,
  Game,
} from 'src/app/services/game-service.service';
import { lastCard } from '../cardwindow/cardwindow.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() icon!: string;
  @Input() disabledCard!: boolean;
  @Input() lastCard!: lastCard;
  @Input() allDisabled!: boolean;

  @Output() disableAll = new EventEmitter();
  @Output() enableCardsClick = new EventEmitter();
  @Output() turnBackCards = new EventEmitter();
  @Output() addToFoundCards = new EventEmitter();

  turnedCards!: HTMLElement[];

  currentCard = {
    disabled: this.disabledCard,
  };

  timeLeft!: number;
  score!: number;

  frontHidden: boolean = false;
  backHidden: boolean = true;
  perspectiveShown: boolean = false;

  constructor(private game: GameServiceService) {}

  ngOnInit(): void {
    this.game.getNewGame().subscribe((newGameData) => {
      this.timeLeft = newGameData.time;
      this.score = newGameData.score;
    });
  }

  turnCardFront($event: Event): void {
    this.currentCard.disabled = true;
    if (this.lastCard.name !== '') {
      this.disableAll.emit();

      if (this.lastCard.name === this.icon) {
        this.game.addTime();
        this.lastCard.name = '';
        this.lastCard.disabledCard = { disabled: false };
        this.addToFoundCards.emit(this.icon)
      } else {
        this.lastCard.name = '';
        this.currentCard.disabled = false;
        let lastCard = this.lastCard.disabledCard;
        lastCard.disabled = false;
        this.lastCard.disabledCard = { disabled: false };
        setTimeout(()=> {
          this.turnBackCards.emit();
        }, 1500)
      }
      
    } else {
      this.lastCard.name = this.icon;
      this.lastCard.disabledCard = this.currentCard;
    }
    this.perspectiveShown = true;
    setTimeout(() => {
      this.frontHidden = true;
    }, 200);
    setTimeout(() => {
      this.backHidden = false;
    }, 500);
  }

  turnCardBack() {
    this.perspectiveShown = false;
    setTimeout(() => {
      this.backHidden = true;
    }, 300);
    setTimeout(() => {
      this.frontHidden = false;
      this.enableCardsClick.emit();
    }, 500);
  }
}
