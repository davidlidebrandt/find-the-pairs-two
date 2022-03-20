import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  objList!: AngularFireList<any>

  constructor(private db: AngularFireDatabase) { 
  }

  getData() {
    this.objList = this.db.list("some");
    return this.objList
  }

  createTest() {
    this.db.object("user/1").update({
     'test': 1,
      'test2': 2
    })
  }
}
