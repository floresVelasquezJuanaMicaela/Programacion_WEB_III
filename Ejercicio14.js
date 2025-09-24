/*14. Proporcione un ejemplo para convertir una promesa en un callback.*/

// Función que devuelve una promesa
function obtenerNumeroPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = 42;
      resolve(numero);
    }, 1000);
  });
}

// Función que recibe un callback y usa la promesa
function obtenerNumeroConCallback(callback) {
  obtenerNumeroPromesa()
    .then(numero => callback(null, numero)) // primer parámetro null = no hay error
    .catch(error => callback(error));
}

// Uso con callback
obtenerNumeroConCallback((error, resultado) => {
  if (error) {
    console.error("Ocurrió un error:", error);
  } else {
    console.log("Número obtenido:", resultado);
  }
});

