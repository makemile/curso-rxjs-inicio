import {
  pluck,
  distinctUntilChanged,
  fromEvent,
  debounceTime,
  throttleTime,
  asyncScheduler,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    throttleTime(400, asyncScheduler, {
      leading: false,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
