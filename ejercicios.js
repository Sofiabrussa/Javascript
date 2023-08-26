
// Escribí un programa que dado un año como entrada diga si es bisiesto o no.

let año = 1924;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log (año + " Es bisiesto")
}  
else  {
    console.log(año + " No es bisiesto")
}

