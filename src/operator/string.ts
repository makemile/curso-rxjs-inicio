import { filter, from, fromEvent, range } from "rxjs";
//  range(1,10).pipe(
// filter(a => a % 2 === 1)
// ).subscribe(console.log)

range(1, 10)
  .pipe(
    filter((a, i) => {
      console.log("index", i);
      return a % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personajes {
  tipo: string,
  nombre: string
}

const personajes: Personajes[] = [
  { tipo: "heroe", nombre: "batman" },
  { tipo: "heroe", nombre: "robin" },
  { tipo: "villano", nombre: "jocke" },
];

from(personajes).pipe(
  filter(a => a.tipo === 'heroe')
).subscribe(console.log)

// from(personajes).pipe(
//   filter(a => a.tipo === 'villano' || a.tipo !== 'heroe' )
// ).subscribe(console.log)

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').map(event => event.code)
// filter(a => a === 'space');

// keyup$.subscribe(console.log)