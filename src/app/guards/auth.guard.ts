import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private afa: AngularFireAuth,
              private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(resolve => {
      const sub = this.afa.authState
        .subscribe((value) => {
          if (value) {
            sub.unsubscribe();
            console.log("Value Exists");
            resolve(true);
          } else {
            sub.unsubscribe();
            console.log("Value Exists Not");
            // resolve(this.router.navigate(["login"]));
            resolve(true);
          }
        });
    });

  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise(resolve => {
      const sub = this.afa.authState
        .subscribe((value) => {
          if (value) {
            sub.unsubscribe();
            resolve(this.router.navigate(["/", 'dashboard']));
          } else {
            sub.unsubscribe();
            resolve(true);
          }
        });
    });

  }

}
