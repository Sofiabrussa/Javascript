
//Arrays
//Un arreglo es un conjunto de datos ordenados por posiciones

const { log } = require("console");

const array = ['hola', 3.14, true];  
const array1 = new Array(3); //crea un array vacio con tres pos


//Para acceder a un elemento
console.log("Se muestra elemento 2 " + array[2]);

//Para añadir al ultimo 
array.push("frutilla");

//Para añadir al principio
array.unshift("Buen dia");

//Para quitar un elemento 
array.splice(2, 1)  //El 2 indica que se borra el elemento 2 y el 1 indica que se elimina solo ese elemento. Si no se pone el 1, se elimina todo a partir del elemento 2 

//Para pasar una cadena a mayuscula o minucula
let array2 = "Hola mundo";
console.log(array2.toLocaleUpperCase());

//Reemplazar un caracter por otro
console.log(array2.replace("Hola", "Chau"))

//