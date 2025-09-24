/*5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band)*/ // false

function miFuncion(band) {
    let invertida = "";
    for (let i = band.length - 1; i >= 0; i--){
        invertida += band[i];
    }
    return band === invertida;
}

console.log(miFuncion("oruro"));
console.log(miFuncion("hola"));
