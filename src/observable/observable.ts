import { Observable} from "rxjs";
import { observer } from "..";


const obs$ = new Observable<string>( subs => {
subs.next('hola');
const a = undefined
a.nombre = 'fernando'
subs.complete();
subs.next('hola');
subs.next('hola');
})


obs$.subscribe(
    observer
)





