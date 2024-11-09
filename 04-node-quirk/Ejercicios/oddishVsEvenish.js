// Definimos la función oddishOrEvenish que toma un número (num) como argumento.
function oddishOrEvenish(num) {
    // Convertimos el número a una cadena y luego lo dividimos en un arreglo de caracteres (dígitos).
    let suma = num.toString().split('');
    // Inicializamos la variable total que guardará la suma de los dígitos.
    let total = 0;

    // Iteramos sobre cada dígito del número (ahora convertido a una cadena).
    for (let index = 0; index < suma.length; index++) {
        // Convertimos cada carácter (dígito) a número y lo sumamos a total.
        total += parseInt(suma[index]);
    }

    // Comprobamos si la suma de los dígitos es par o impar.
    if (total % 2 == 0) {
        // Si la suma es par, retornamos "Oddish".
        return "Oddish";
    } else {
        // Si la suma es impar, retornamos "Evenish".
        return "Evenish";
    }
}

// Llamamos a la función con el número 86 y mostramos el resultado en la consola.
console.log(oddishOrEvenish(86)); // "Evenish" porque la suma de los dígitos 8 + 6 = 14 (par)


/*const oddishOrEvenishGabri = num =>
    num.toString().split('').reduce((sum, n) => sum + parseInt(n), 0) % 2 === 0
        ? "Oddish"
        : "Evenish";

console.log(oddishOrEvenishGabri(76)); */
