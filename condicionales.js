
// CONDICIONAL IF 
let monto= 500

if (monto > 5000) {
    console.log("La operación requiere autorización especial");
   }
else {
    console.log("No exitosa")
}


// CONDICIONAL SWITCH 
let color= "rojo"

switch (color) {
    case "rojo":
    console.log("#FF0000");
    break;
    case "azul":
    console.log("#0000FF");
    break;
    case "verde":
    console.log("#00FF00");
    break;
    default:
    console.log("#000000");
   }


//Operador ternario
console.log("La operación", monto > 5000 ? "requiere autorización especial" : "está autorizada"); //Sintaxis es= condicion ? expresion1 : expresion2


// ESTRUCTURA FOR
let gusto = "violeta";

for (let i = 0; i < gusto.length; i++) {
 console.log(gusto[i]);
}
   

// ESTRUCTURA WHILE 
let i = 0;

while (i < 10){      //mientras que i sea menor que 10, aumenta 1 
 console.log(i+1);
 i++; //aumenta 1 
}


// ESTRUCTURA DO WHILE 
let y = 0;     //Se ejecuta al menos una vez la condicion 

do {
 y++;
 console.log(y);
} while (y < 10);

