import { of } from "rxjs";

const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);

console.log('inicio')
obs$.subscribe(
  next => console.log(next,'next'),
null, () => console.log('terminamos la secuencia'));
console.log('fin')