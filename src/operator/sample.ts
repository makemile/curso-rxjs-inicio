import {fromEvent, interval,  sample } from "rxjs";



const seconds$ = interval(5000);

const click$ = fromEvent(document, "click");

seconds$.pipe(sample(click$)).subscribe(console.log);