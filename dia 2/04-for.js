/* 
/* for(contador; condicional; actualizaion_contador){
    el codigo que se va a repetir 
}
*/

// for (let i=0; i<=1; i=i+1){

//     console.log(`el contador es :${i}`);

// }
// console.log("Yo estoy al final");

// let ropa =["Bufanda", "camisa", "Guantes", "jeans"]

// for (let i=0; i < ropa.length; i++){
//     console.log(ropa[i]);

// }

let carta =["ceviche", "pollo a la brasa", "costillar","adobo", "caldo de gallina"];
let eleccion = +prompt(" Escoja : 0. ceviche, 1. Pollo a la brasa, 2. Costillar , 3. adobo, 4. Caldo de Gallina");

for (let i=0; i< carta.length; i++){
    if (eleccion == i){
        console.log(`Ud, a elegido: ${carta[i]}`);
    }
}