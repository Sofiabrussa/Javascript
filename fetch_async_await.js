// Una promesa es el objeto que representa la respuesta de una tarea asíncrona, es decir la respuesta a una
//tarea que de antemano no es posible saber cuándo se obtendrá

let mensaje = new Promise((resolve, reject)=>{   
    setTimeout(function () {
    resolve('Este es el mensaje');
    }, 2000);
   })


mensaje.then(m =>{   // para capturar el resultado favorable de la promesa se usa then()
    console.log(m)
}).catch(function () {
    console.log('error'); //el catch captura el resultado fallido o reject de la promesa
})



//El método Fetch (*)  
//La función fetch permite hacer una petición a un API y es justamente un callback
function obtener_pokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;    //Mandamos url y id entonces va a ir directo a un pokemon por ejemplo el 25 y sacar su info 
    return fetch(url).then(res => {return res.json()});  //Capturamos la data y dps transformamos la data en un json
}

obtener_pokemon(1).then(data => {     //llamamos a la funcion y enviamos el id como parametro
    console.log(data.name);
    return obtener_pokemon(2);
}).then(data =>{
    console.log(data.name);
    return obtener_pokemon(3);
}).then(data =>{
    console.log(data.name);
    return obtener_pokemon(4);
}).then(data =>{
    console.log(data.name);
    return obtener_pokemon(5);
}).then(data =>{
    console.log(data.name);
}).catch((err) => {    //Si hay algun errror, lo controlamos 
    console.log(err);
})


//Async Await (*)
//Usamos el async para definir una función donde se encontrará el await que nos permitirá esperar una promesa de tal forma que podamos volver
//nuestro código sincrono.

const miAsyncFunction = async() =>  {
    try  {
        const res = await fetch("")   //Espera la rta del fetch para seguir ejecutandose
        console.log(res)
    } catch (error)  {
        console.log(error);
    }
}

console.log(miAsyncFunction());

