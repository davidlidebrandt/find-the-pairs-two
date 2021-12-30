import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homewarn',
  templateUrl: './homewarn.component.html',
  styleUrls: ['./homewarn.component.css']
})
export class HomewarnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeWarnOpen: boolean = true;

  cancelReturnHome() {
    this.homeWarnOpen = !this.homeWarnOpen;
  }

}
