const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
    // Convertir el PIN a una cadena para poder iterar sobre los dígitos
    const pinStr = String(pin);

    // Validar que el PIN tenga solo dígitos y tenga exactamente 4 caracteres
    if (!/^\d{4}$/.test(pinStr)) {
        return "El PIN debe ser un número de 4 dígitos.";
    }

    let danceMoves = [];

    // Iterar sobre cada dígito del PIN
    for (let i = 0; i < pinStr.length; i++) {
        let digit = parseInt(pinStr[i]);

        // El índice del movimiento de baile es el dígito más la posición (i), y ajustado por el tamaño de MOVES
        let moveIndex = (digit + i) % MOVES.length;

        // Agregar el movimiento correspondiente al arreglo de movimientos
        danceMoves.push(MOVES[moveIndex]);
    }

    // Devolver la secuencia de movimientos
    return danceMoves;
}

// Ejemplo de uso:
console.log(danceConvert(1234)); // ["Shake", "Pirouette", "Box Step", "Headspin"]
console.log(danceConvert(9876)); // ["Arabesque", "Shimmy", "Headspin", "Lock"]
