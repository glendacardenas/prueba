
let tg=0;
let ga =0;

let l = +prompt("ingrese la cantidad de litros que produce: ");
let pg = +prompt("ingrese el precio del galon");

tg=(l/3.785);
ga=pg*tg;

console.log(`Por: ${l} litros que son:${tg} galones se le pagara:${ga}`);

 