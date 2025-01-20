import {interval, Observer, timer} from "rxjs";


export const observer: Observer<unknown> = {
  next: (value) => console.log("siguiente", value),
  error: (value) => console.warn("error:", value),
  complete: () => console.log("complete"),
};

const observer1 = {
next: val => console.log('next',val),
complete: () => console.log('complete')
}

const interval$ = interval(1000);
const timer$ = timer(2000); 
console.log('inicio')
timer$.subscribe(observer1);
console.log('fin')
