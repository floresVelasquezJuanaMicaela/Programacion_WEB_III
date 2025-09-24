/*1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.
let obj = miFuncion(“euforia”)
console.log(obj) { a: 1, e: 1, i: 1, o: 1, u: 1 }*/

function miFuncion(obj) {
  let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let letra of obj) {
    switch (letra) {
      case 'a': case 'A':
        vocales.a++;
        break;
      case 'e': case 'E':
        vocales.e++;
        break;
      case 'i': case 'I':
        vocales.i++;
        break;
      case 'o': case 'O':
        vocales.o++;
        break;
      case 'u': case 'U':
        vocales.u++;
        break;
    }
  }

  return vocales;
}


let obj = miFuncion("euforia");
console.log(obj); 

