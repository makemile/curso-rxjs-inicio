import { asyncScheduler } from "rxjs";

// setTimeout(() =>{
// },3000);

// setInterval(() => {

// },3000);

const saludar = () => console.log('hola mundo');
const saludar2 = nombre => console.log();

asyncScheduler.schedule(saludar, 2000);

const supscripcionSaludo =  asyncScheduler.schedule( function(state){

console.log('state', state)  
this.schedule(state + 1, 1000);
},3000,0);

asyncScheduler.schedule(() => supscripcionSaludo.unsubscribe(),6000);