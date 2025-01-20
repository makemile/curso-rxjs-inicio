import { fromEvent } from "rxjs";
/**
 * Events DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observerl = {
    next: x => console.log('Observer got a next value: ', x)
};

src1$.subscribe(({x,y}) => {
  console.log(x)
  console.log(y)
})
src2$.subscribe(event => {
    console.log(event.key)
})