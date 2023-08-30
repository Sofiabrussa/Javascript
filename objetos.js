// OBJETOS
//Un objeto de JavaScript tiene propiedades asociadas a él. Las propiedades de un objeto definen sus características


//Creación de objetos con new object
const persona = new Object();
    persona.nombre = "Sofi",
    persona,edad = 22;
    persona.profesion = "Estudiante";



//Creación de objetos con función constructora
function Persona(nombre, profesion, fechaNacimiento) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = function () {   //Funcion que calcula al edad de la persona con su fecha de nacimiento 
        const hoy = new Date();
        return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        };
   }



//Creacion de clases 
class Robot  {
    constructor(color, x, y)  {   //El constructor de un objeto es una funcion donse se inicializa el mismo y todas sus propiedades
        this.color = color;   //Atributos
        this.x = x;
        this.y = y;
   }

   desplazar = function (x, y)  { this,x = x ; this.y = y ;}  //Metodos

}


let robot1= new Robot("verde", 10, 10);  //Creamos un objeto de la clase Robot
console.log(robot1.color)




//PROTOTYPE
//El prototipo (prototype) es un concepto clave que se utiliza para lograr la herencia y compartir propiedades y métodos entre objetos
//Podemos modificar todos los objetos
Persona.prototype.inicio = function() {
    console.log("Bienvenido a este mundo")
};



//Podemos modificar solo un objeto
//juan.iniciar = function()  {
 //   console.log("Bienvenido a este mundo")};








