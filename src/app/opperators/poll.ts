import { timer, Observable } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

export function poll(period: number, initialDelay = 0) {
  return <T>(source: Observable<T>): Observable<T> =>
    timer(initialDelay, period).pipe(concatMapTo(source));
}
