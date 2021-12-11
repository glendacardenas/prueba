// let simple=0;
// let doble=0;
// let triple=0;
let N = +prompt("Ingrese el numero de hamburguesas:");
let eleccion =["SIMPLE", "DOBLE", "TRIPLE"];
let TI = +prompt(" Escoja : 0.SIMPLE 1. DOBLE, 2.TRIPLE");
let tarjeta=["tarjeta", "efectivo"];
let TP= +prompt("Ingrese el tipo de pago: 0.-tarjeta 1.-efectivo");

for (let i=0; i< eleccion.length; i++){
        if (TP=(eleccion[i].length=0)) {
            PA=20;
            TO=PA*N;
             }
             else if (TP=(eleccion[i].length=1))
            {PA=25;
                TO=PA*N;}
            else {
                PA=28;
                TO=PA*N;}
            
    }


for (let j=0;   j< tarjeta.length; j++){
    if (tarjeta[j]=0) {
        CA=TO*0.05;
        TOT=TO+CA;       }
         else {(tarjeta[j]=1);
        CA=TO*0;
            TOT=TO+CA;}
        } 

console.log(`La hamburguesa costo :${PA} `);
console.log(`El total sin cargo es: ${TO}`);
console.log(`El cargo es: ${CA}`);
console.log(`El total a pagar es : ${TOT}`);
