import { timer, interval } from "rxjs";

const observer1 = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const interval$ = interval(1000);
const timer$ = timer(2000);
console.log("inicio");
timer$.subscribe(observer1);
console.log("fin");

const observer2 = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// const intervals$ = interval(1000);

const today5 = new Date();
today5.setSeconds(today5.getSeconds() + 5);
const timer2$ = timer(today5);

console.log("inicio");

timer2$.subscribe(observer2);
console.log("Fin");
