// Declaramos la variable 'inicio' con un valor inicial de 0
let inicio = 0;
// Declaramos la variable 'limite' que será el número hasta el cual queremos contar (30 en este caso)
let limite = 30;

// Usamos un bucle 'while' que se ejecutará mientras 'inicio' sea diferente de 'limite'
while (inicio != limite) {
    // Incrementamos el valor de 'inicio' en 1 en cada iteración
    inicio++;

    // Comprobamos si 'inicio' es múltiplo de 3 y de 5 al mismo tiempo
    if (inicio % 3 === 0 && inicio % 5 === 0) {
        fizzbazz(); // Llamamos a la función 'fizzbazz' si es múltiplo de ambos
    }
    // Si no, comprobamos si 'inicio' es múltiplo de solo 3
    else if (inicio % 3 === 0) {
        fizz(); // Llamamos a la función 'fizz' si es múltiplo de 3
    }
    // Si no, comprobamos si 'inicio' es múltiplo de solo 5
    else if (inicio % 5 === 0) {
        bazz(); // Llamamos a la función 'bazz' si es múltiplo de 5
    }
    // Si 'inicio' no es múltiplo de 3 ni de 5
    else {
        console.log(inicio); // Imprimimos el número actual
    }
}

// Definimos la función 'fizz' que imprime "Fizz" en la consola
function fizz() {
    console.log("Fizz");
}

// Definimos la función 'bazz' que imprime "Bazz" en la consola
function bazz() {
    console.log("Bazz");
}

// Definimos la función 'fizzbazz' que imprime "Fizzbuzz" en la consola
function fizzbazz() {
    console.log("Fizzbuzz");
}
