// flujo-async.js

// Imprimimos en la consola que el flujo asíncrono ha iniciado.
console.log('Inicio del flujo asíncrono');

// Definimos la función "operacion1".
function operacion1() {
    // Usamos "setTimeout" para simular una operación asíncrona que tarda 1000 milisegundos (1 segundo).
    setTimeout(() => {
        // Una vez transcurrido el tiempo, imprimimos que la Operación 1 ha sido completada.
        console.log('Operación 1 completada');
    }, 1000);
}

// Definimos la función "operacion2".
function operacion2() {
    // Usamos "setTimeout" para simular otra operación asíncrona que tarda 500 milisegundos (0.5 segundos).
    setTimeout(() => {
        // Una vez transcurrido el tiempo, imprimimos que la Operación 2 ha sido completada.
        console.log('Operación 2 completada');
    }, 500);
}

// Llamamos a la función "operacion1". Esta operación se ejecutará de manera asíncrona.
operacion1();

// Llamamos a la función "operacion2". Esta operación también se ejecutará de manera asíncrona.
operacion2();

// Imprimimos en la consola que el flujo asíncrono ha finalizado.
console.log('Fin del flujo asíncrono');
