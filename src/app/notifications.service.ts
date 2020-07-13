import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { scan } from 'rxjs/operators';
import { poll } from './opperators/poll';
import { whenPageVisible } from './opperators/whenPageVisible';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications$: Observable<number>;

  constructor() {
    this.notifications$ = of(1).pipe(
      poll(1000),
      scan((acc, val) => acc + val, 0),
      whenPageVisible()
    );
  }
}
