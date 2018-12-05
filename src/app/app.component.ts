import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grab-a-beer';
  beers: Observable<any[]>;
  filteredBeers: any;
  itemNames: Observable<string[]>;

  filters = {};
  
  constructor(db: AngularFirestore) {
    this.beers = db.collection('beers').valueChanges();
 
  }
}
