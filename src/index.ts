import { Observable, Observer, Subject } from "rxjs";

export const observer: Observer<unknown> = {
  next: (value) => console.log("siguiente", value),
  error: (value) => console.warn("error:", value),
  complete: () => console.log("complete"),
};

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(intervalID)
    console.log('intervalo destruido')
  };
});

const subject$ = new Subject<number>();
const intervalSubject = intervalo$.subscribe(subject$);
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubject.unsubscribe();
}, 3500);
