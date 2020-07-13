import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$: Observable<string>;

  constructor() {
    this.notifications$ = interval(1000).pipe(
      map((val) => `notification ${val}`)
    );
  }
}
