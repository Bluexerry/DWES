// Definimos una función llamada volumeOfBox que toma un objeto 'sizes' como argumento
function volumeOfBox(sizes) {
    // La función calcula el volumen de una caja utilizando la fórmula: ancho * largo * alto
    return sizes.width * sizes.length * sizes.height;
}

// Llamamos a la función pasando un objeto con las dimensiones de la caja (ancho, largo y alto)
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
