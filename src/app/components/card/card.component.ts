import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

  turnCardFront(e:any): void {
    let parent = e.target.closest(".perspective-inner")
    parent.classList.toggle("perspective-inner-turn")
    let front = e.target.closest(".front")
    let back = parent.children[1]
    setTimeout(() => {
      front.classList.toggle("hidden")
    }, 200);
    setTimeout(() => {
      back.classList.toggle("hidden")
    }, 500);

  }

  turnCardBack(e:any) {
    let parent = e.target.closest(".perspective-inner")
    parent.classList.toggle("perspective-inner-turn")
    let front = parent.children[1]
    console.log(parent.children)
    let back = parent.children[0]
    setTimeout(() => {
      back.classList.toggle("hidden")
    }, 400);
    setTimeout(() => {
      front.classList.toggle("hidden")
    }, 300);
  }

}
