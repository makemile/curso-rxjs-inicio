import { ajax} from "rxjs/ajax";


const url = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url, {
  'content-Type': 'aplication/json',
  'mi-token': 'ABC123'
});

obs$.subscribe( data => console.log(data))