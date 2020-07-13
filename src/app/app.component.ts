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
  notifications$: Observable<string[]>;

  constructor(private notificationService: NotificationsService) {
    this.notifications$ = notificationService.notifications$.pipe(
      scan(
        (acc: string[], val: string): string[] => [...acc, val],
        [] as string[]
      )
    );
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
