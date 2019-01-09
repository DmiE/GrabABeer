import { Component, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'grab-a-beer';
  beers: Observable<any[]>;
  filteredBeers: any[];
  db: AngularFirestore;

  name: string|null;
  tag: string|null;
  type: string|null;


  constructor(db: AngularFirestore) {
    this.db = db;
    this.applyFilters('');
  }


  onSubmit(event: Event) {
    event.preventDefault();
  }

  filterExact(name: string, searchName: string) {
    this[name] = searchName;
    this.applyFilters(searchName);
    document.querySelector('#result-section').scrollIntoView();
  }

  applyFilters(searchedName: string) {
    this.beers = this.db.collection('beers', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.type) { query = query.where('type', '==', this.type); }
      if (this.tag) { query = query.where('tag', '==', this.tag); }
      return query;
    }).valueChanges()
    .pipe(map(item => {
      console.log(searchedName)
      return item.filter(it => it['name'].toLowerCase().includes(searchedName.toLocaleLowerCase()));
    }));
  }
}
