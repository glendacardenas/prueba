let edad = +prompt ("cual es tu edad?");

//condicionales trabajan con boleanos true y false
//if (edad>=18){
 //   console.log("si accedes a la primera dosis");

//}else if(edad>=0){
  //      console.log("no aun tienes que esperar");
//}

//else{
  //  console.log("Error al ingresar los datos");
//}

if (edad>=60){
    console.log("Te toca pfizer y te toca yaaaaa");
    // y =&& ambos tienen que ser verdura
}else if(edad>=55&& edad >=45){
    console.log("te toca pfizer y te toca el finde");
    //o =// uno tien que ser verdura
}

else if (edad ==18 || edad ==21){
    console.log("te toca sinopharm mañana");
}
else{
    console.log ("Anda a yopongoelhombro.com");
}
