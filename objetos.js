
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


//Para crear un objeto llamado persona mediante la función constructora:
const juan = new Persona("Juan", "estudainte", 23)
const sofi = new Persona("sofi", "estudainte", 22)
const facu = new Persona("facu", "estudainte", 17)


//El prototipo (prototype) es un concepto clave que se utiliza para lograr la herencia y compartir propiedades y métodos entre objetos
//Podemos modificar todos los objetos
Persona.prototype.inicio = function() {
    console.log("Bienvenido a este mundo")
};

sofi.inicio();
juan.inicio();


//Podemos modificar solo un objeto
juan.iniciar = function()  {
    console.log("Bienvenido a este mundo")
};

juan.iniciar();






