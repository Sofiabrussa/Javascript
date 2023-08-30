
// FUNCIONES
function saludar(nombre) {   // saludar es el nombre de la funcion, nombre es el nombre del parametro que recibe la funcion y dentro de las llaves tenemos lo que hace la funcion 
    console.log("Hola " + nombre);
}

saludar ("Sofi") //Invocamos la funcion y mandamos sofi como parametro


// EXPRESION DE FUNCION 
let saludo = function (nommbre) {   //Asignamos la funcion a una variable 
    console.log("Hola", nombre);
   };


//FUNCIONCES FLECHA (No se puede usar arrow functions dentro de constructores)
obtenerPersonaMasGrandeArrow = (p1, p2, p3) => {
    let mayor = p1;
    if (p2.edad() > p1.edad())
    mayor = p2;
    else {
    if (p3.edad() > p1.edad())
    mayor = p3;
    }
    console.log('Soy una arrow function. Atte esMayorDeEdad');
    return mayor;
   };



//CLOUSURES 

const multiplicarpor = (numero) => {
    let x = numero;  //definimos una variable

    return function(otroNumero)  {  //retornamos otra funcion
        return x * otroNumero;
    };
 };

console.log(multiplicarpor(5));  //Devuelve la funcion como retorno 

const unaVar = multiplicarpor(5) //Guardamos la funcion como retorno en una variable
console.log(unaVar(4)); //Accedemos a la funcion 
