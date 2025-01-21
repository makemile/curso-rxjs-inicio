import { catchError, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
const url = "http://api.github.com/users?per_page=5";

const Errores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const attachError = (err: AjaxError) => {
  console.warn('error en', err.message)
  return of({})
}

const fetchPromise = fetch(url);

// fetchPromise
// .then(Errores)
// .then(res => res.json())
// .then(data => console.log('data:', data))
// .catch(err => console.log(err))

ajax(url)
  .pipe(
    pluck('response'),
    catchError(attachError)
  )
  .subscribe(users => console.log('users', users));