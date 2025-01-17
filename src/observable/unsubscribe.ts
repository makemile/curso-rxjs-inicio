import { Observable, Observer } from "rxjs";

export const observer: Observer<unknown> = {
  next: (value) => console.log("siguiente", value),
  error: (value) => console.warn("error:", value),
  complete: () => console.log("complete"),
};

const intervalos$ = new Observable<number>((subs) => {
  let count: number = 0;

  const interval = setInterval(() => {
    count++;
    subs.next(count);
    subs.remove
    console.log(count)
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('interval destruido')
  }
});

const subs1 = intervalos$.subscribe(observer);
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
    console.log('completed')
}, 3000)
