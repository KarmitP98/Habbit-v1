import {Component, OnDestroy, OnInit} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Habitt";

  user: any;

  constructor(public fireAuth: AngularFireAuth) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.fireAuth.currentUser.then(value => {
      this.user = value;
    });
  }


}
