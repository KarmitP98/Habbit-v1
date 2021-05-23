import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';
import {OpacityLeftTrigger} from '../../shared/keyframes.animations';

@Component({
             selector: 'app-snackbar',
             templateUrl: './snackbar.component.html',
             styleUrls: ['./snackbar.component.scss'],
             animations: [OpacityLeftTrigger]
           })
export class SnackbarComponent implements OnInit {

  constructor(public ss: SnackbarService) { }

  ngOnInit(): void {
  }
}
