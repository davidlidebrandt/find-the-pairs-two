import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  data: any = [];
  
  constructor(private dataService: DataService) { 
    this.dataService.createTest()
    const ref = this.dataService.getData();
    ref.valueChanges().subscribe((data) => {
      this.data = data;
      console.log(this.data)
      
    })
  }

  ngOnInit(): void {
 
  }

}
