import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent implements OnInit {

  //@Input() beers: Observable<any[]>;
  @Input() beers: AppComponent['beers'];

  constructor() {
  }

  ngOnInit() {

    this.beers.subscribe(a => {
      console.log("beers" + a)
    })
  }
}
