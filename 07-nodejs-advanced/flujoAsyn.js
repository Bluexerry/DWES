// flujo-async.js

console.log('Inicio del flujo asíncrono');

function operacion1() {
    setTimeout(() => {
        console.log('Operación 1 completada');
    }, 1000);
}

function operacion2() {
    setTimeout(() => {
        console.log('Operación 2 completada');
    }, 500);
}

operacion1();
operacion2();

console.log('Fin del flujo asíncrono');
