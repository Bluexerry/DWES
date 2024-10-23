// fizzbuzz.js
function fizzBuzz(n, conditions) {
    let result = '';

    // Verificamos primero si es divisible por 15
    if (n % 15 === 0) {
        return conditions[15]; // Solo devuelve "foo" si es divisible por 15
    }

    // Recorremos las condiciones restantes
    for (const divisor in conditions) {
        if (n % Number(divisor) === 0) {
            result += conditions[divisor];
        }
    }

    // Si no se cumple ninguna condición, devolvemos el número
    return result || n;
}

// Exportamos la función para los tests
module.exports = fizzBuzz;
