import { Observer } from "rxjs";

export const observer: Observer<unknown> = {
  next: (value) => console.log("siguiente", value),
  error: (value) => console.warn("error:", value),
  complete: () => console.log("complete"),
};

const url = "https://httpbin.org/delay/1";

