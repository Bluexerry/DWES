function isSimilar(arrX, arrY) {
    // Si ambos son estrictamente iguales (referencia en memoria), se consideran similares
    if (arrX === arrY) return true;

    // Si uno es un objeto y el otro no, no son similares
    if (typeof arrX !== 'object' || typeof arrY !== 'object') return false;

    // Si son arreglos, comprobamos su longitud y comparamos sus elementos recursivamente
    if (Array.isArray(arrX) && Array.isArray(arrY)) {
        // Si los arreglos no tienen la misma longitud, no pueden ser similares
        if (arrX.length !== arrY.length) return false;
        // Comparamos cada elemento de ambos arreglos recursivamente
        for (let i = 0; i < arrX.length; i++) {
            // Si los elementos no son similares, devolvemos false
            if (!isSimilar(arrX[i], arrY[i])) return false;
        }
        // Si todos los elementos son similares, devolvemos true
        return true;
    }

    // Si son objetos (pero no arreglos), comparamos las claves y sus valores
    if (arrX instanceof Object && arrY instanceof Object) {
        // Obtenemos las claves de ambos objetos
        let keysX = Object.keys(arrX);
        let keysY = Object.keys(arrY);

        // Si tienen un número diferente de claves, no pueden ser similares
        if (keysX.length !== keysY.length) return false;

        // Comparamos recursivamente cada par clave-valor en los objetos
        for (let key of keysX) {
            // Si alguna clave no existe en el otro objeto o los valores correspondientes no son similares, devolvemos false
            if (!keysY.includes(key) || !isSimilar(arrX[key], arrY[key])) {
                return false;
            }
        }
        // Si todos los pares clave-valor son similares, devolvemos true
        return true;
    }

    // Si ninguna de las condiciones anteriores se cumple, devolvemos false
    return false;
}

// Ejemplo 1: Los arreglos son idénticos, por lo que se considera similar
console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]));
// ➞ true

// Ejemplo 2: Los valores en los arreglos son diferentes (1 y 7), por lo que no son similares
console.log(isSimilar({ "pairs": [[3, 5], [1, 7], [2, 6], [0, 8]] }, { "pairs": [[3, 5], [1, 1], [2, 6], [0, 8]] }));
// ➞ false

// Ejemplo 3: Aunque las claves son iguales, los valores para la clave "Elliot" son diferentes, por lo que no son similares
console.log(isSimilar({ "Sam": 4, "Elliot": 4, "equality": true }, { "Sam": 4, "Elliot": 5, "equality": false }));
// ➞ false

// Ejemplo 4: Los objetos dentro de los arreglos tienen las mismas claves y valores, por lo que son similares
console.log(isSimilar([{ "D": [0, 3] }, { "X": [1, 3] }, { "D": [3, 7] }], [{ "D": [0, 3] }, { "X": [1, 3] }, { "D": [3, 7] }]));
// ➞ true
