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

    return this.getUser()?.length > 0 ? true : this.router.navigate(['/login']);


  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.getUser()?.length === 0;

  }

  getUser(): string {
    console.log(localStorage.getItem('CID') as string);
    return localStorage.getItem('CID') as string;
  }

}
