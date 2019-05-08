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
  filteredBeers: any[];  //  pusty array który bedziemy wypełniać
  db: AngularFirestore;
  allBeers: Observable<any[]>;

  name: string|null;
  tag: string|null;
  type: string|null;
  IBU: number|null;
  Alcohol: string|null;
  //searchName: string|null;

  searchName = ''
  searchTag = ''
  searchIBU = ''


  constructor(db: AngularFirestore) {
    this.db = db;
    this.applyFilters('', '', '');
  }


  onSubmit(event: Event) {
    event.preventDefault();
  }

  filterByName(searchName: string) {
    this.applyFilters(searchName, '', ''); // dodac filtrowanie po reszcie wybranych parametrów 
    document.querySelector('#result-section').scrollIntoView();
  }

  filterExact(name: string, searchName: string, searchType: string, searchAlco: string) {
    console.log(this.searchName)
    console.log(searchType)
    //this[name] = searchName;
    this.applyFilters(searchName, searchType, searchAlco); // dodac filtrowanie po reszcie wybranych parametrów 
    document.querySelector('#result-section').scrollIntoView();
  }

  applyFilters(searchedName: string, searchedType: string, searchedAlco) {
    this.beers = this.db.collection('beers', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.type) { query = query.where('type', '==', this.type); }
      if (this.tag) { query = query.where('tag', '==', this.tag); }
      if (this.IBU) { query = query.where('IBU', '==', this.IBU); }
      if (this.Alcohol) { query = query.where('Alcohol', '==', this.Alcohol); }
      return query;
    }).valueChanges()
    .pipe(map(item => {
      console.log(searchedName)
      return item
      .filter(it => it['name'].toLowerCase().includes(searchedName.toLocaleLowerCase()))
      .filter(it => it['type'].toLowerCase().includes(searchedType.toLocaleLowerCase()))
      .filter(it => it['alcohol'].toLowerCase().includes(searchedAlco.toLocaleLowerCase()))
      .map(it => {
        it['tags'] = it['tags'].join(', ');
        return it;
      });
    }));
  }
}
