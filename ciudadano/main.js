function sumar(a,b){
    return a+b;


}

let suma=sumar;


console.log(suma(2,3));

let suma2 =sumar(3,4);
console.log("suma", suma2)

console.log(sumar(suma(4,4),4));
