import {Component, OnDestroy, OnInit} from '@angular/core';
import {APPEARANCE} from '../../../shared/constants';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  APP = APPEARANCE;
  passVisible = false;
  password = '';
  email = '';
  matchCases: { cond: string, match: boolean }[] = [
    {cond: 'At-least 1 Lower-case letter.', match: false},
    {cond: 'At-least 1 Upper-case letter.', match: false},
    {cond: 'At-least 1 Number letter.', match: false},
    {cond: 'At-least 1 Special Character (!@#$%^&*).', match: false},
    {cond: 'Between 6 to 18 characters.', match: false},
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  verifyValidity($event: KeyboardEvent): void {
    this.matchCases[0].match = !!this.password.match('^.*[a-z]+.*');
    this.matchCases[1].match = !!this.password.match('^.*[A-Z]+.*');
    this.matchCases[2].match = !!this.password.match('^.*[0-9]+.*');
    this.matchCases[3].match = !!this.password.match('^.*[!@#$%^&*]+.*');
    this.matchCases[4].match = this.password.length > 6 && this.password.length < 18;
  }

}
