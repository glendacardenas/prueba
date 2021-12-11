let gato = {
    nombre: "Michi", 
    raza : "persa",
    edad: 3,

};
console.log(gato.nombre);

//esta es otra manera de acceder a una propiedad , dato adicional

console.log(gato["raza"]);

let bebidas =[ "agua", "limonada", "mojito", "Pisco Sour"];

console.log(bebidas.length);

bebidas.push("inca cola");
//objeto bebidas con un metodo push
console.table(bebidas);

//let edad = 20
//new lo que hace es crear un nuevo objeto

let edad = new Number("20");

//class una fabrica es new number
console.log(typeof edad);

console.log(edad +5);

console.log(typeof console);

console.log(typeof bebidas);