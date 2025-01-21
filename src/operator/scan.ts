import { map, from, scan, reduce } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

//reduce

from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

//redux

interface Usuario {
  id: string | number;
  autenticado: boolean;
  token: string;
  age?: string | number;
}

const user: Usuario[] = [
  {
    id: "1",
    autenticado: false,
    token: null,
  },
  {
    id: "2",
    autenticado: false,
    token: "ABC",
  },
  {
    id: "2",
    autenticado: true,
    token: "abc123",
  },
];

const state$ = from(user).pipe(
  scan<Usuario>((acc, cur) => {
    return { ...acc, ...cur };
  })
);

const id$ = state$.pipe(map((state) => state));
id$.subscribe(console.log)