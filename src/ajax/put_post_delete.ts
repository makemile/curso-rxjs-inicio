import { ajax} from "rxjs/ajax";


const url = "https://httpbin.org/delay/1";

// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "Fernando",
//     },
//     {
//       "mi-token": "ABCDEF",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url: url,
  method: 'POST',
  headers: {
    'mi-token': 'ABCDEF'
  },
  body: {
    id: 1,
    nombre: 'Fernando'
  }
}).subscribe(console.log)