import { range, asyncScheduler } from "rxjs";

const src$ = range(1,10, asyncScheduler);

src$.subscribe(console.log);