/*11. Proporcione un ejemplo concreto de encadenamiento de promesas.*/


function obtenerNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = 5;
      resolve(numero);
    }, 1000);
  });
}


function multiplicarPorDos(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}


obtenerNumero()
  .then(numero => {
    console.log("Número obtenido:", numero);
    return multiplicarPorDos(numero);
  })
  .then(resultado => {
    console.log("Número multiplicado por 2:", resultado);
    return resultado + 10;
  })
  .then(final => {
    console.log("Resultado final sumando 10:", final);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });

