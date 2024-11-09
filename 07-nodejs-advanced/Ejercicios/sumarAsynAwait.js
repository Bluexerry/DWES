// funciones.js

// 1. Definición de la función síncrona 'sumar'
// Esta función recibe dos números 'a' y 'b' y devuelve su suma.
function sumar(a, b) {
    return a + b; // Retorna la suma de 'a' y 'b'
}

// 2. Definición de la función asíncrona 'sumarAsync' que devuelve una Promesa
// Esta función también recibe dos números 'a' y 'b' y simula una operación asíncrona.
function sumarAsync(a, b) {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona con 'setTimeout' para demorar 2 segundos
        setTimeout(() => {
            const suma = a + b; // Calculamos la suma de 'a' y 'b'

            // Puedes agregar condiciones para rechazar la promesa si lo deseas
            resolve(suma); // Resolvemos la promesa con el resultado de la suma
        }, 2000); // 2 segundos de retraso
    });
}

// 3. Definición de la función asíncrona 'ejecutarSuma' que utiliza 'sumarAsync' con async/await
async function ejecutarSuma(a, b) {
    try {
        // Esperamos el resultado de 'sumarAsync' utilizando 'await'
        const resultado = await sumarAsync(a, b);
        console.log(`La suma con Async/Await es: ${resultado}`); // Imprimimos el resultado de la suma
    } catch (error) {
        // Si ocurre un error durante la ejecución de 'sumarAsync', se captura y se imprime
        console.error('Ocurrió un error:', error);
    }
}

// 4. Llamada a la función 'ejecutarSuma' con los valores 25 y 35
ejecutarSuma(25, 35);
