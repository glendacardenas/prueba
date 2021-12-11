let NC = +prompt("Ingrese el numero de cita:")

if (NC<=3){
    CC=200;
    TOT=NC*CC;
    console.log(`el costo de la cita es ${CC} y el total de tratamiento es : ${TOT}`);
    }
    else if (NC<=5){
        CC=150;
        TOT=(NC-3)*150+600;
        console.log(`el costo de la cita es ${CC} y el total de tratamiento es : ${TOT}`);
    }
        else if (NC<=8){
           CC=100;
           TOT=(NC-5)*100+900;
            console.log(`el costo de la cita es ${CC} y el total de tratamiento es : ${TOT}`);
            }else
            {CC=50;
            TOT=(NC-8)*50+1200;
             console.log(`el costo de la cita es ${CC} y el total de tratamiento es : ${TOT}`); 
        }
    
