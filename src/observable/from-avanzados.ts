import { from } from "rxjs";
/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer1 = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
  };
  
  // const source$ = of<number[]>(...[1,2,3,4,5]);
  // const source$ = from<string>('fernando');
  const source$ = from(fetch('https://api.github.com/users/klerith'));
  
  source$.subscribe(observer1);