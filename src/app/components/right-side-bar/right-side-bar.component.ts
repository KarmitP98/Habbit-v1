import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
             selector: 'app-right-side-bar',
             templateUrl: './right-side-bar.component.html',
             styleUrls: ['./right-side-bar.component.scss'],
           })
export class RightSideBarComponent implements OnInit, OnDestroy {

  user: any;
  sub: any;

  constructor( public as: AuthService,
               private us: UserService,
               public auth: AngularFireAuth ) { }

  ngOnInit(): void {
    const id = JSON.parse( localStorage.getItem( 'id' ) as string );
    this.sub = this.us.fetchUser( 'uId', '==', id )
                   .subscribe( user => {
                     if (user) {
                       this.user = user[0];
                     }
                   } );
  }

  ngOnDestroy(): void {
  }


}
