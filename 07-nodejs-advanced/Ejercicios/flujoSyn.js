// flujo-sync.js

// Imprimimos en la consola que el flujo síncrono ha iniciado.
console.log('Inicio del flujo síncrono');

// Definimos la función "operacion1".
function operacion1() {
    // Imprimimos en la consola que la Operación 1 ha sido completada.
    console.log('Operación 1 completada');
}

// Definimos la función "operacion2".
function operacion2() {
    // Imprimimos en la consola que la Operación 2 ha sido completada.
    console.log('Operación 2 completada');
}

// Llamamos a la función "operacion1". Esta operación se ejecutará de manera síncrona.
operacion1();

// Llamamos a la función "operacion2". Esta operación también se ejecutará de manera síncrona.
operacion2();

// Imprimimos en la consola que el flujo síncrono ha finalizado.
console.log('Fin del flujo síncrono');
