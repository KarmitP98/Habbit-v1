import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserModel } from '../shared/models';
import { Observable } from 'rxjs';

@Injectable( {
               providedIn: 'root',
             } )
export class UserService {


  constructor( private firestore: AngularFirestore ) {
  }

  /**
   * PUT Request: Add a new yser to the database and store the user email to the emails collection
   * @param user : UserModel
   */
  addNewUser( user: UserModel ) {
    this.firestore.collection<UserModel>( 'users' )
        .doc( user.uId )
        .set( user )
        .catch( reason => {
          console.error( reason.message );
        } );
  }

  /**
   * GET Request.
   * @if field exists @return users that match the condition
   * @else @return all the users in the collection
   * @param field : string (Attribute in entity user)
   * @param condition : string (Query Condition)
   * @param value : any (Value for Query to match)
   */
  fetchUser( field?: string, condition?: '<' | '<=' | '==' | '!=' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any' | 'not-in', value?: any ):
    Observable<UserModel[]> {

    if (field && condition && value) {
      return this.firestore.collection<UserModel>( 'users', ref => ref.where( field, condition, value ) ).valueChanges();
    }

    return this.firestore.collection<UserModel>( 'users' ).valueChanges();
  }

  /**
   * UPDATE Request.
   * Update the user with newUser value.
   * @param newUser : UserModel
   */
  updateUser( newUser: UserModel ) {
    this.firestore.collection<UserModel>( 'users' )
        .doc( newUser.uId )
        .update( newUser );
  }

  /**
   * DELETE Request.
   * Deletes the user that matches attribute email in user entity.
   * Then remove the associated email entity from emails collection.
   * @param user: UserModel
   */
  deleteUser( user: UserModel ) {
    this.firestore.collection<UserModel>( 'users' )
        .doc( user.uId )
        .delete()
        .then( value => {
          this.firestore.collection<string>( 'emails', ref => ref.where( 'email', '==', user.email ) )
              .doc()
              .delete();
        } );
  }

}
