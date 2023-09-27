
//METODOS ARRAYS 

const array = ["Hola", 0, 23, true, "chau"]

//indexof : Devuelve el indice del elemento que buscamos. Si devuelve -1 es porque el elemento no esta
console.log(array.indexOf("chau")) 


const prueba = [0 ,5, 10, 15, 20, 65, 80, 65] //array de prueba 

//forEach : Recorre cada elemento del array 
prueba.forEach(i => console.log(i+2))

//filter: Filta los elementos, devuelve un array nuevo, no modifica el original 
const mayores = prueba.filter(i => i>10)
console.log (mayores)




