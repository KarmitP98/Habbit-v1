import {Component, OnInit} from '@angular/core';
import {APPEARANCE} from '../../../shared/constants';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  email = '';
  password = '';
  passwordRe = '';
  phoneNumber = '';
  fullName = '';
  step = 1;
  APP = APPEARANCE;
  showPass = false;
  showRePass = false;
  passwordMatch = false;
  matchCases: { cond: string, match: boolean }[] = [
    {cond: 'At-least 1 Lower-case letter.', match: false},
    {cond: 'At-least 1 Upper-case letter.', match: false},
    {cond: 'At-least 1 Number letter.', match: false},
    {cond: 'At-least 1 Special Character (!@#$%^&*).', match: false},
    {cond: 'Between 6 to 18 characters.', match: false},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  startRegister() {
    this.step++;
  }

  verifyValidity($event: KeyboardEvent): void {
    this.matchCases[0].match = !!this.password.match('^.*[a-z]+.*');
    this.matchCases[1].match = !!this.password.match('^.*[A-Z]+.*');
    this.matchCases[2].match = !!this.password.match('^.*[0-9]+.*');
    this.matchCases[3].match = !!this.password.match('^.*[!@#$%^&*]+.*');
    this.matchCases[4].match = this.password.length > 6 && this.password.length < 18;
  }

}
