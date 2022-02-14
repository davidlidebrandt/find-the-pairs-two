import { Component, OnInit } from '@angular/core';
import { UserAuthService, User } from 'src/app/services/user-auth.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userAuthInfo: UserAuthService) { 
  
  }

  ngOnInit(): void {
    
  }

  

}
