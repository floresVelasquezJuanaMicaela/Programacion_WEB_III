/*Realizar un código para ejecutar una función callback después 2 segundos*/

function ejecutarDespues2Segundos(callback) {
  setTimeout(callback, 2000); // 2000 ms = 2 segundos
}


ejecutarDespues2Segundos(function() {
  console.log("¡Han pasado 2 segundos!");
});

