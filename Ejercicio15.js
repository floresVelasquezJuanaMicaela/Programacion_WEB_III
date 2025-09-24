/*15. Proporcione un ejemplo para convertir un callback en una promesa.*/

function obtenerNumeroCallback(callback) {
  setTimeout(() => {
    const numero = 50;
    callback(null, numero); 
  }, 1000);
}


function obtenerNumeroPromesa() {
  return new Promise((resolve, reject) => {
    obtenerNumeroCallback((error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}


obtenerNumeroPromesa()
  .then(numero => console.log("Número obtenido:", numero))
  .catch(error => console.error("Ocurrió un error:", error));
