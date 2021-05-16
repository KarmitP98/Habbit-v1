import { Component, OnInit } from '@angular/core';
import { APPEARANCE } from '../../shared/constants';
import { UserModel } from '../../shared/models';
import { AuthService } from '../../services/auth.service';

@Component( {
              selector: 'app-signup',
              templateUrl: './signup.component.html',
              styleUrls: [ './signup.component.scss' ],
            } )
export class SignupComponent implements OnInit {

  app = APPEARANCE;

  email = '';
  name = '';
  password = '';
  rePassword = '';
  phone = '';

  constructor( private authService: AuthService ) {
  }

  ngOnInit(): void {
  }

  signup() {
    if (this.passwordMatch()) {
      const user: UserModel = {
        uId: '',
        email: this.email,
        name: this.name,
        phone: this.phone,
        password: this.password,
      };
      this.authService.signUpWithEmail( user );
    }
  }

  passwordMatch(): boolean {
    return this.password === this.rePassword;
  }


}
