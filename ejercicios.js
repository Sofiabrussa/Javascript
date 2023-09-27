
//Crear una funcion que reciba dos parametros. El primer parametro un string y el segundo un string a buscar en el primero. 
//Si lo encuentra, informar al usuario y sino, tmb informar

// encontrarStr = (str1, str2) =>  {
    
//     let ifstre = str1.includes(str2);

//     if (ifstre)  {
//         console.log("Se encontro")
//     }
//     else  {
//         console.log ("No se encontro")
//     }
// }

//PROBANDO CONSULTAR APIS
const render = document.getElementById("render") 

const peticion = async () =>  {
    try {
        const rta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data = await rta.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

const renderDatos = async () => {
    const datos = await peticion()
    //render.innerHTML = datos.name

    render.innerHTML =  ` 
        <h1> ${datos.name} </h1>
        <h2> ${datos.id} </h2>
        <img src="${datos.sprites.front_default}">
    `
}


renderDatos()

