import { fromEvent, auditTime, tap, map } from "rxjs";



const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map( ({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(5000)
  )
  .subscribe(console.log);