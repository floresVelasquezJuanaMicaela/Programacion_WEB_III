/*3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}*/

function miFuncion(obj) {
  let resultado = { pares: [], impares: [] };
  let Pares = 0;
  let Impares = 0;

  for (let i = 0; i < obj.length; i++) {
    if (obj[i] % 2 === 0) {
      resultado.pares[Pares] = obj[i];
      Pares++;
    } else {
      resultado.impares[Impares] = obj[i];
      Impares++;
    }
  }

  return resultado;
}


let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj); 

