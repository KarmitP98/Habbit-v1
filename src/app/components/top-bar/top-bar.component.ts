import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
             selector: 'app-top-bar',
             templateUrl: './top-bar.component.html',
             styleUrls: ['./top-bar.component.scss'],
           })
export class TopBarComponent implements OnInit {

  hidden = false;
  currentY = 0;

  constructor(public auth: AngularFireAuth) {

  }


  ngOnInit(): void {
  }

}
