let alumnos=["leonardo", "arturo", "gustavo", "ariana", "alan", "masami"];

//algoritmo para que el usuario ingrese un nombre y busque si existe el alumno y me muestre
//la posicion de ese alumno

//for e if

// let eleccion = prompt("ingrese el nombre del alumno que quiere buscar:")

// for (let i=0; i< alumnos.length; i++){
//     if (eleccion ==alumnos[i]){
//         console.log(` ${eleccion} se encuentra en la posicion : ${i}`);
//         break;
//     }
//     console.log(`Buscando ... en ${i}`);
// }
let notas =[
    17, 15, 10, 5, 14, 20, 7,9,18,1,0, 13
]

for (let i=0; i<notas.length; i++){
    if (notas[i]< 12){
        continue;

    }
    console.log(notas[i]);
}

