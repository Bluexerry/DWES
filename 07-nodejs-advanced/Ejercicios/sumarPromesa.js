// funciones.js

// Definición de la función 'sumarAsync' que devuelve una Promesa
function sumarAsync(a, b) {
    // Devolvemos una nueva Promesa
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona con setTimeout, que demora 2 segundos
        setTimeout(() => {
            const suma = a + b; // Calculamos la suma de 'a' y 'b'

            // Resolvemos la promesa con el resultado de la suma
            resolve(suma);
        }, 2000); // 2000 milisegundos (2 segundos)
    });
}

// Llamamos a la función 'sumarAsync' con los valores 20 y 30
sumarAsync(20, 30)
    .then((resultado) => {
        // Este bloque se ejecuta si la promesa se resuelve correctamente
        console.log(`La suma con Promesa es: ${resultado}`); // Imprimimos el resultado de la suma
    })
    .catch((error) => {
        // Este bloque se ejecuta si hay un error al resolver la promesa
        console.error(error); // Imprimimos el error
    });
