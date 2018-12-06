import { Component } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grab-a-beer';
  beers: Observable<any[]>;
  filteredBeers: any[];
  db: AngularFirestore;

  name: string|null;
  tag: string|null;
  type: string|null;

  
  constructor(db: AngularFirestore) {
    this.db = db;
    this.applyFilters();
  }

  filterExact(name: string, value: string) {
    this[name] = value;
    this.applyFilters();
  };

  applyFilters() {
    this.beers = this.db.collection('beers', ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.type) { query = query.where('type', '==', this.type) };
      if (this.tag) { query = query.where('tag', '==', this.tag) };
      return query;
    }).valueChanges()

  }
}
