import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  email: string | undefined = '';
  sub: Subscription | undefined;

  menuOpened = false;

  constructor(public authService: AuthService,
              public userService: UserService) {
  }

  ngOnInit(): void {
    const cid = localStorage.getItem('CID') as string;

    this.sub = this.userService.fetchUser('uId', '==', cid)
      .subscribe(value => {
        if (value) {
          this.email = value[0].email;
        }
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


}
