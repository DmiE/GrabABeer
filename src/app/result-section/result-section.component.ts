import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent implements OnInit {

  @Input() beers: Observable<any[]>;

  constructor() {
  }

  ngOnInit() {

    this.beers.subscribe(a => {
      console.log("osz kurwa " + a)
    })
  }
}
