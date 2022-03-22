import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  hidden = true;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  displayWindow() {
    this.hidden = false;
    setTimeout(()=> {
      this.hidden = true;
    }, 5000)
  }

}
