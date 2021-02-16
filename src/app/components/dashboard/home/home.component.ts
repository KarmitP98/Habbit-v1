import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs';
import {UserModel} from '../../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  user: UserModel | undefined;


  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    const cid = localStorage.getItem('CID');

    this.sub = this.userService.fetchUser('uId', '==', cid)
      .subscribe(value => {
        if (value?.length > 0) {
          this.user = value[0];
        }
      });
  }

  ngOnDestroy(): void {
  }


}
