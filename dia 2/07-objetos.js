let mascota = {
    nombre:"Backus",
    raza:"poodle",
    color: "blanco",
    edad:13,
    hobiies: ["jugar", "perseguir gatos", "comer pate"],
    comer: function(){
        console.log("nam ñam ñam");
    },
    ladra:true,
};
//objeto.propiedad
// console.log(mascota.nombre);
// console.log(mascota.edad);
// console.log(mascota.hobiies[0]);

// mascota.comer();

let albumMusical={
    nombre:"After Hours",
    fecha_lanzamiento: "20/03/2020",
    genero:["Dream Pop", "Drum and Bass"],
    canciones: [
        {
        titulo:"Heartless", 
        duracion: 3.21,
        autor:["abel Tesfaye", "Leland Wayne"]
        },
        {
            titulo: "Blinding lights",
            duracion:3.22,
            autor:["abel Tesyafe", "Ahmad Balshe", "Jason Quennevile"]
        },
    
    ],
};
console.log(albumMusical.canciones[0].autor[1]);



