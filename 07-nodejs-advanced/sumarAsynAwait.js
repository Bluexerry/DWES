// funciones.js

// 1. Definición de la función síncrona 'sumar'
function sumar(a, b) {
    return a + b;
}

// 2. Definición de la función asíncrona 'sumarAsync' que devuelve una Promesa
function sumarAsync(a, b) {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona con setTimeout
        setTimeout(() => {
            const suma = a + b;
            // Puedes agregar condiciones para rechazar la promesa si lo deseas
            resolve(suma);
        }, 2000); // 2 segundos de retraso
    });
}

// 3. Definición de la función asíncrona 'ejecutarSuma' que utiliza 'sumarAsync' con async/await
async function ejecutarSuma(a, b) {
    try {
        const resultado = await sumarAsync(a, b);
        console.log(`La suma con Async/Await es: ${resultado}`);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

// 4. Llamada a la función 'ejecutarSuma' con los valores 25 y 35
ejecutarSuma(25, 35);
