/*9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.*/

let promesa = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Exito despues de 3 segundos");
  }, 3000);
});

promesa.then(function(mensaje) {
  console.log(mensaje);
});

