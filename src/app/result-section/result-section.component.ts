import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppComponent } from '../app.component';
// import { MapsServices } from './maps.service';


@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.css']
})
export class ResultSectionComponent implements OnInit {

  lat: any = '';
  lng: any = '';

  clickableMarker: boolean = true;

  location: Object;

  //@Input() beers: Observable<any[]>;
  @Input() beers: AppComponent['beers'];

  constructor() {
  }

  ngOnInit() {
    // this.lat = parseFloat('49.692679')
    // this.lng = parseFloat('19.168221')

    // this.beers.subscribe(a => {
    //   console.log("beers" + a)
    // })
  }
}
