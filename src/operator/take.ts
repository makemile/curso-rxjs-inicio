import { of, tap, take } from "rxjs";

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
  tap(console.log),
  take(3)
).subscribe({
  next: value => console.log('value', value),
  complete: () => console.log('complete')

})