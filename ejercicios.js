
// Escribí un programa que dado un año como entrada diga si es bisiesto o no.
let año = 1924;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log (año + " Es bisiesto")
}  
else  {
    console.log(año + " No es bisiesto")
}


//Crear una funcion que reciba dos parametros. El primer parametro un string y el segundo un string a buscar en el primero. 
//Si lo encuentra, informar al usuario y sino, tmb informar

encontrarStr = (str1, str2) =>  {
    
    let ifstre = str1.includes(str2);

    if (ifstre)  {
        console.log("Se encontro")
    }
    else  {
        console.log ("No se encontro")
    }
}


encontrarStr("Aguante messi", "messi")



