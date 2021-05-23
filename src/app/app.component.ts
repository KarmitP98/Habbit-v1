import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subscription} from 'rxjs';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss'],
           })
export class AppComponent implements OnInit, OnDestroy {
  title = 'Habitt';

  sub = new Subscription();

  constructor(public fireAuth: AngularFireAuth) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.fireAuth.user.subscribe(user => {
      if (user) {
        localStorage.setItem('id', JSON.stringify(user.uid));
      }
    });
  }
}
