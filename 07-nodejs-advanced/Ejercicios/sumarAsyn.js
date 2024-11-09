// funciones.js

// Definimos una función llamada 'sumarAsync' que realiza una suma de manera asíncrona
// La función acepta tres parámetros: 'a' (primer número), 'b' (segundo número) y 'callback' (una función que se ejecutará cuando se complete la suma)
function sumarAsync(a, b, callback) {
    // Usamos 'setTimeout' para simular una operación asíncrona, en este caso con un retraso de 2000 milisegundos (2 segundos)
    setTimeout(() => {
        // Calculamos la suma de 'a' y 'b'
        const suma = a + b;

        // Llamamos a la función 'callback' pasando el resultado de la suma como argumento
        callback(suma);
    }, 2000);
}

// Llamamos a la función 'sumarAsync' pasando los números 10 y 15, y una función 'callback' que recibe el resultado de la suma
sumarAsync(10, 15, (resultado) => {
    // Imprimimos el resultado que obtenemos a través del callback
    console.log(`La suma asíncrona es: ${resultado}`);
});
