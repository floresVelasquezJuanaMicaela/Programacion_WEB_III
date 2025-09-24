/*10. ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una
promesa?*/

console.log("Es conveniente utilizar un callback cuando se desea ejecutar una función después de que otra función haya terminado su ejecución, especialmente en operaciones asíncronas como eventos, temporizadores o llamadas a APIs. Los callbacks permiten manejar tareas que dependen de la finalización de otras tareas sin bloquear el hilo principal de ejecución.");
console.log("Por otro lado, es necesario utilizar una promesa cuando se trabaja con operaciones asíncronas que pueden tener múltiples estados (pendiente, cumplida, rechazada) y se desea manejar estos estados de manera más estructurada y legible. Las promesas permiten encadenar múltiples operaciones asíncronas y manejar errores de forma más sencilla que con callbacks, evitando el problema conocido como 'callback hell'.");
console.log("En resumen, se recomienda utilizar callbacks para tareas simples y promesas para operaciones asíncronas más complejas que requieren un manejo de errores más robusto.");
