//JavaScript ejecuta el código secuencialmente en orden descendente. Sin embargo, hay algunos casos en los
//que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no
//secuencial. Esto se llama programación asíncrona.

//Por ejemplo, cuando hacemos el pedido de información a un servidor, la
//respuesta posiblemente demore un poco. Sin embargo, el hilo de ejecución de JavaScript continuará con las
//demás tareas que hay en el código.

//CALLBACKS: Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea
//es simplemente una función que se pasa como parametro a otra funcion

function imprimir(callback){    //La función imprimir toma un argumento llamado callback, que se espera que sea una función (es la funcion anonima).
    callback();
   }

imprimir(function() {
    console.log('Texto impreso!'); //la función anónima es la que se ejecutará como callback después de que imprimir haya terminado su trabajo.
   });
   
   

   // Esta función ejecuta el callback despúes de esperar cierto tiempo el cual también le pasamos como parámetro.
setTimeout(function(){
    console.log('Hola')
   }, 2000);  //Callback se ejecuta dps de 2000 milisegs


   