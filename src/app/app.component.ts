import { Component } from '@angular/core';

import { NotificationsService } from './notifications.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notifications$: Observable<number[]>;

  constructor(private notificationService: NotificationsService) {
    this.notifications$ = notificationService.notifications$.pipe(
      scan(
        (acc: number[], val: number): number[] => [...acc, val],
        [] as number[]
      )
    );
  }

  trackByFn(index: number, item: number): number {
    return item;
  }
}
