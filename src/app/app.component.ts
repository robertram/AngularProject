import { Component } from '@angular/core';
//Imports Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Semana 10';

  title_section = 'Hola mundo';

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('/contactos');

    //Use snapshotChanges().map() to store the key

    this.items = this.itemsRef.snapshotChanges().pipe(
      map(action =>
        action.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )

    )
  }



}








