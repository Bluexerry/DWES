// Definimos un arreglo con los posibles movimientos de baile.
const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

// Definimos la función danceConvert que recibe un PIN como argumento.
function danceConvert(pin) {
    // Convertimos el PIN a una cadena para poder iterar sobre cada uno de los dígitos.
    const pinStr = String(pin);

    // Validamos que el PIN tenga exactamente 4 caracteres y que todos sean dígitos (números).
    if (!/^\d{4}$/.test(pinStr)) {
        return "El PIN debe ser un número de 4 dígitos."; // Si no cumple con la validación, devolvemos un mensaje de error.
    }

    // Creamos un arreglo vacío que almacenará los movimientos de baile que corresponderán al PIN.
    let danceMoves = [];

    // Iteramos sobre cada dígito del PIN (ahora convertido a una cadena).
    for (let i = 0; i < pinStr.length; i++) {
        let digit = parseInt(pinStr[i]); // Extraemos el dígito actual y lo convertimos a número entero.

        // Calculamos el índice del arreglo MOVES, sumando el dígito actual con la posición del dígito (i).
        // Utilizamos el operador % (modulo) para asegurar que el índice no se salga del tamaño del arreglo MOVES.
        let moveIndex = (digit + i) % MOVES.length;

        // Agregamos el movimiento de baile correspondiente al índice calculado al arreglo de movimientos.
        danceMoves.push(MOVES[moveIndex]);
    }

    // Devolvemos la secuencia de movimientos generada.
    return danceMoves;
}

// Ejemplo de uso:
// Llamamos a la función con un PIN de ejemplo (1234) y mostramos el resultado en la consola.
console.log(danceConvert(1234)); // ["Shake", "Pirouette", "Box Step", "Headspin"]
console.log(danceConvert(9876)); // ["Arabesque", "Shimmy", "Headspin", "Lock"]
