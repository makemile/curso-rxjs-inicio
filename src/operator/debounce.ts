import { fromEvent, pluck } from "rxjs";
import { debounceTime } from "rxjs";
import { distinctUntilChanged } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
