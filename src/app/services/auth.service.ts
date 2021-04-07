import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {UserModel} from "../shared/models";
import firebase from "firebase";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: "root"
})
export class AuthService {

  loginAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private fireAuth: AngularFireAuth,
              private userService: UserService,
              private firestore: AngularFirestore,
              private router: Router) {
  }

  loginWithEmail(email: string, password: string) {
    this.loginAuth.next(true);
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((result: UserCredential) => {

        // @ts-ignore
        localStorage.setItem("CID", result.user.uid as string);
        this.router.navigate(["dashboard"]);

      })
      .catch(reason => {
        console.error(reason.message);
      })
      .finally(() => {
        this.loginAuth.next(false);
      });
  }

  signUpWithEmail(user: UserModel) {
    this.loginAuth.next(true);
    if (typeof user.email === "string" && typeof user.password === "string") {
      this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result: UserCredential) => {
          console.log(result);

          user.uId = result.user?.uid;
          this.userService.addNewUser(user);

          localStorage.setItem("CID", user.uId as string);
          this.router.navigate(["dashboard"]);

        })
        .catch(reason => {
          console.error(reason.message);
        })
        .finally(() => {
          this.loginAuth.next(false);
        });
    }
  }

  logOut(): void {
    this.fireAuth.signOut()
      .then((result) => {
        console.log("The User has been logged out!");
        this.router.navigate([""]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

}
