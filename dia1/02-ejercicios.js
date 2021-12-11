// //1. Pedir al usuario sus nombres , apellidos y edad cada
// //uno por separadp , el resultado debeira ser un console.
// //log, resumiendo los datos del usuario,

// let nombres = prompt("Cual es tu nombre?");

// let apellidos = prompt("Cuales son tus apellidos ?");

// let edad = prompt("Cual es tu edad?");

// //console.log (`Bienvenido@: ${nombres} ${apellidos} de ${edad}
// //años de edad`);

// alert(`Bienvenid@ : ${nombres} ${apellidos} de ${edad}
// años de edad`);

//que datos necesito?
//como puedo tener esos datos?
//estos datos en la forma que necesito???

//prompt
/// los datos estan en la forma que necesito'

//pomer mas delante del prompt

let base = prompt("Cual es la base del triangulo?")
let altura= prompt("Cual es la altura del triangulo?")

console.log(typeof altura);

let baseNumero=parseFloat(base);
let alturaNumero = parseFloat(altura);


let resultado= (baseNumero*alturaNumero)/2;


alert(`El area del triangulo : ${resultado}`);
console.log(resultado);

let numa=+prompt("Ingrese a:");
let numb=+prompt("ingrese b:");
console.log(`el residuo de los numeros es : ${numa%numb}`);
