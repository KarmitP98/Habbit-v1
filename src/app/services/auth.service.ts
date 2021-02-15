import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  // tslint:disable-next-line:typedef
  loginWithEmail(email: string, password: string) {
    this.loginAuth.next(true);

    setTimeout(() => {
      this.loginAuth.next(false);
    }, 500);

  }

}
