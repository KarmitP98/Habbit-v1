import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TYPE} from "../../shared/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  Type = TYPE;

  constructor(private authService: AuthService) {
    this.authService.logOut();
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.loginWithEmail(this.email, this.password);
  }

  handleOnClick(data: any) {
    console.log(data);
  }

  handleOnChange(data: any) {
    console.log(data);
  }

}
