import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
             selector: 'app-left-side-bar',
             templateUrl: './left-side-bar.component.html',
             styleUrls: ['./left-side-bar.component.scss'],
           })
export class LeftSideBarComponent implements OnInit {

  buttons = [
    {name: 'Home', icon: 'home', active: true, link: 'home'},
    // {name: 'Profile', icon: 'person', active: false, link: 'home'},
    {name: 'Score', icon: 'score', active: false, link: 'score'},
    {name: 'Rewards', icon: 'verified', active: false, link: 'rewards'},
  ];

  constructor(public as: AuthService) { }

  ngOnInit(): void {
  }

  goTo(i: number) {
    for (const button of this.buttons) {
      button.active = false;
    }
    this.buttons[i].active = true;
  }

  logOut(): void {
    this.as.logOut();
  }
}
