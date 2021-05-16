import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TYPE } from '../../shared/constants';

@Component( {
              selector: 'app-login',
              templateUrl: './login.component.html',
              styleUrls: [ './login.component.scss' ],
            } )
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  Type = TYPE;

  theme = 'success';
  duration = 20000;
  message = 'Test Message';

  constructor( private authService: AuthService ) {
    this.authService.logOut();
  }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithEmail( this.email, this.password );
  }

  loginWith( provider: string ) {
    this.authService.loginWithProvider( provider );
  }
}
