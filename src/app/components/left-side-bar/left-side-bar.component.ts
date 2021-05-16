import { Component, OnInit } from '@angular/core';

@Component( {
              selector: 'app-left-side-bar',
              templateUrl: './left-side-bar.component.html',
              styleUrls: [ './left-side-bar.component.scss' ],
            } )
export class LeftSideBarComponent implements OnInit {

  buttons = [
    { name: 'Home', icon: 'home', active: true },
    { name: 'Profile', icon: 'person', active: false },
    { name: 'Cards', icon: 'style', active: false },
    { name: 'Information', icon: 'info', active: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goTo( i: number ) {
    for (const button of this.buttons) {
      button.active = false;
    }
    this.buttons[i].active = true;
  }
}
