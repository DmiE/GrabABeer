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
  items: Observable<any[]>;
  itemNames: Observable<string[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    this.items.forEach(
      item => item.forEach(i =>
        console.log(i.siema)
      )
    );
    console.log(this.items[1]);
  }
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
