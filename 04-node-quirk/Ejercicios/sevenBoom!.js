// Definimos la función sevenBoom que toma un arreglo como argumento (por defecto es un arreglo vacío).
function sevenBoom(arr = []) {
    // Utilizamos el método join() para convertir el arreglo en una cadena de texto.
    // Luego, verificamos si la cadena resultante contiene el número "7" usando includes().
    if (arr.join('').includes('7')) {
        // Si la cadena contiene "7", retornamos "Boom!".
        return "Boom!";
    } else {
        // Si la cadena no contiene "7", retornamos "Not Boom!".
        return "Not Boom!";
    }
}

// Llamamos a la función con el arreglo [1, 2, 3, 4, 5, 6, 7] y mostramos el resultado en la consola.
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!" porque el arreglo contiene el número 7.
