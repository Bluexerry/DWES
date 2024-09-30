/* Función clasica sin necesidad de definir tipo de variable */
function funcion1(argument) {
    console.log(argument);
    return 1;
}
/* Función con más argumentos de los invocados */
function funcion2(arg, arg2) {
    if (arg2) {
        console.log(arg2);
    } else {
        console.log('arg2 no está definida')
    }
}

/* Función que se invoca con argumentos que no usa */
function funcion3() {
    console.log('No hay nada');
}

/* Parámetro 'rest' que recoge el resto de argumentos */
function funcion4(primero, ...resto) {
    console.log(resto);
}

const value = funcion1('test');
console.log(value);
funcion2('test');
funcion3('test');
funcion4(1, 2, 3, 4, 5, 6, 7, 8, 9);