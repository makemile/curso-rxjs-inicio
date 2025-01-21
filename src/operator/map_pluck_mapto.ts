import { range, map, fromEvent, pluck, mapTo } from "rxjs";

range

range(1, 5)
  .pipe(map<number, string>((number, index) => (number * 10).toString()))
  .subscribe(console.log);

  const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
   keyup$.pipe(map(item => (
      item.code
   ))).subscribe(console.log)

   const keyupluckp$ = keyup$.pipe(
    pluck('key')
   );

   const keyupMapTo$ = keyup$.pipe(
   mapTo<string>('key')
   );

   keyupluckp$.subscribe(code => console.log('pluck', code));
   keyup$.subscribe(code => console.log('map', code));
   keyupMapTo$.subscribe(code => console.log('mapTo', code));
