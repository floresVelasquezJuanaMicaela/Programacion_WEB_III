/*4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el
menor, en un objeto.
let obj = miFuncion([3,1,5,4,2])
console.log(obj) // { mayor: 5, menor: 1 }*/

function miFuncion(obj) {
    let resultado = { mayor: obj[0], menor: obj[0] };
    for (let i = 1; i < obj.length; i++) {
        if (obj[i] > resultado.mayor) {
            resultado.mayor = obj[i];
        }
        if (obj[i] < resultado.menor) {
            resultado.menor = obj[i];
        }
    }
    return resultado;
}

let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj); 