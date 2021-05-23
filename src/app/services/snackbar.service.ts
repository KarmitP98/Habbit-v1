import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class SnackbarService {

  snackbarSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.snackbarSubject.next(null);
  }

  showSnackbar(data: { show: boolean, title: string, duration?: number, theme?: string, actions?: any }) {
    this.snackbarSubject.next(data);
    setTimeout(() => {this.hideSnackbar(); }, data.duration || 5000);
  }

  hideSnackbar() {
    this.snackbarSubject.next({show: false});
  }
}
