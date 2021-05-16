import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserModel } from '../shared/models';
import firebase from 'firebase';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import UserCredential = firebase.auth.UserCredential;

@Injectable( {
               providedIn: 'root',
             } )
export class AuthService {

  // Loading subject to maintain current state of the process.
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>( false );

  constructor( private fireAuth: AngularFireAuth,
               private userService: UserService,
               private firestore: AngularFirestore,
               private router: Router ) {
  }

  /**
   * Authenticate the user using email and password.
   * Navigate to the home page once user is authenticated.
   * Display error if user cannot be authenticated.
   * @param email
   * @param password
   */
  loginWithEmail( email: string, password: string ) {
    this.loading.next( true );
    this.fireAuth.signInWithEmailAndPassword( email, password )
        .then( ( result: UserCredential ) => {

          localStorage.setItem( 'id', JSON.stringify( result?.user?.uid ) );
          console.log( result.user?.uid );
          this.router.navigate( [ '/home' ] )
              .then( () => {
                console.log( 'User has successfully logged in.' );
              } )
              .catch( ( e ) => {
                console.error( e.message );
              } );

        } )
        .catch( reason => {
          console.error( reason.message );
        } )
        .finally( () => {
          this.loading.next( false );
        } );
  }

  /**
   * Signup a new user using email, password.
   * Create a new user field in the database.
   * Navigate to 'home' page.
   * @param user
   */
  signUpWithEmail( user: UserModel ) {
    this.loading.next( true );
    if (typeof user.email === 'string' && typeof user.password === 'string') {
      this.fireAuth.createUserWithEmailAndPassword( user.email, user.password )
          .then( ( result: UserCredential ) => {
            console.log( result );

            // @ts-ignore
            user.uId = result.user?.uid;
            this.userService.addNewUser( user );

            localStorage.setItem( 'id', user.uId as string );
            this.router.navigate( [ '/home' ] );

          } )
          .catch( reason => {
            console.error( reason.message );
          } )
          .finally( () => {
            this.loading.next( false );
          } );
    }
  }

  /**
   * Logout current user.
   * Remove 'id' value from the localstorage and navigate to 'login' page.
   */
  logOut(): void {
    this.fireAuth.signOut()
        .then( () => {
          console.log( 'The User has been logged out!' );
          localStorage.removeItem( 'id' );
          this.router.navigate( [ '/login' ] );
        } )
        .catch( ( error ) => {
          console.log( error.message );
        } );
  }

  /**
   * Login with @param provider
   * @param provider
   */
  loginWithProvider( provider: string ) {
    let pro: any;
    switch (provider) {
      case 'google':
        pro = new firebase.auth.GoogleAuthProvider();
        break;
      case 'github':
        pro = new firebase.auth.GithubAuthProvider();
        break;
      case 'facebook':
        pro = new firebase.auth.FacebookAuthProvider();
        break;
      default:
        pro = new firebase.auth.EmailAuthProvider();
    }
    this.fireAuth.signInWithPopup( pro )
        .then( value => {
          if (value) {
            // @ts-ignore
            const { user: { email: email, uid: uId, displayName: name, phoneNumber: phone } } = value;

            if (value.additionalUserInfo?.isNewUser) {
              // @ts-ignore
              this.userService.addNewUser( { email, uId, name, phone, password: '' } );
            }
            if (value.user) {
              localStorage.setItem( 'id', JSON.stringify( uId ) );
              this.router.navigate( [ '/home' ] )
                  .then( () => {
                    console.log( 'User has successfully logged in.' );
                  } )
                  .catch( ( e ) => {
                    console.error( e.message );
                  } );
            }
          }
        } )
        .catch( ( reason: { errorCode: any; message: any; } ) => {
          console.log( reason.errorCode );
          console.log( reason.message );
        } );
  }

}
