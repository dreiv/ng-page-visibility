import { partition, fromEvent, Observable } from 'rxjs';
import { shareReplay, takeUntil, repeatWhen } from 'rxjs/operators';

export function whenPageVisible() {
  const visibilitychange$ = fromEvent(document, 'visibilitychange').pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  const [pageVisible$, pageHidden$] = partition(
    visibilitychange$,
    () => document.visibilityState === 'visible'
  );

  return <T>(source: Observable<T>) =>
    source.pipe(
      takeUntil(pageHidden$),
      repeatWhen(() => pageVisible$)
    );
}
