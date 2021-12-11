// let producto = +prompt("Ingrese el codigo del producto");

// switch(producto){
//     //case posible_valor , este puede ser un numero 
//     //booleano , string
//     case 1:
//         console.log ("chocolate");
//         break;
    
//     case 2:
//         console.log("Papitas");
//         break;
//     case 3:
//         console.log ("Galletas");
//         break;
            
//     case 4:
//         console.log("Pollos");
//         break;
//     default: //else
//         console.log("codigo no encontrado");

// }

let horas = +prompt("Ingrese sus horas semanales:");

//Si el trabajador mas de 35 horas tiene horas extras

// si el trabajador tiene igual o mas de 30 hasta menos 
/// de 35 horas con su jornada

//si tiene menos de 30 de horas se le debe mandar un aviso

// horas > 35 ------> horas
// horas >= 30 && horas  < 35 ----> cumplio

switch(true){
    case horas>35:
        console.log("horas extra!");
        break;
    case horas >= 30 && horas <=35:
        console.log("cumplio con su jornada");
        break;
    case horas < 30:
        console.log("no cumplio su jornada paga baja")
        break;
}