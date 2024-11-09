// Importamos el módulo 'readline' para poder interactuar con el usuario a través de la consola
const readline = require('readline');

// Creamos una interfaz de lectura para recibir entrada del usuario y mostrar salida en la consola
const rl = readline.createInterface({
    input: process.stdin,  // Definimos que la entrada será desde el teclado (entrada estándar)
    output: process.stdout // Definimos que la salida será en la consola (salida estándar)
});

// Generamos un número secreto aleatorio entre 1 y 100 para que el usuario intente adivinarlo
// Math.random() genera un número decimal aleatorio entre 0 y 1. Al multiplicarlo por 100 y sumarle 1, obtenemos un número entre 1 y 100.
// Math.floor() redondea el número hacia abajo para obtener un número entero.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Mensaje de bienvenida al juego, explicando el rango del número que debe adivinarse
console.log("¡Bienvenido al juego de adivinar el número! Estoy pensando en un número entre 1 y 100.");

// Función que controla el proceso de adivinanza del número
function adivinarNumero() {
    // rl.question() muestra un mensaje y espera la entrada del usuario
    // 'respuesta' contiene el valor ingresado por el usuario
    rl.question('Adivina el número: ', (respuesta) => {
        // Guardamos la respuesta en 'numeroUsuario' (aún como texto)
        const numeroUsuario = respuesta;

        // Validamos si el valor ingresado no es un número
        if (isNaN(numeroUsuario)) {
            console.log("Por favor, ingresa un número válido.");
            adivinarNumero(); // Llamamos a la función otra vez para que el usuario vuelva a intentar
        }
        // Si el número ingresado es menor que el número secreto
        else if (numeroUsuario < numeroSecreto) {
            console.log("¡Demasiado bajo!");
            adivinarNumero(); // Llamamos a la función para que el usuario intente nuevamente
        }
        // Si el número ingresado es mayor que el número secreto
        else if (numeroUsuario > numeroSecreto) {
            console.log("¡Demasiado alto!");
            adivinarNumero(); // Llamamos a la función para que el usuario intente nuevamente
        }
        // Si el usuario adivina el número correctamente
        else {
            console.log("¡Felicidades! Adivinaste el número " + numeroSecreto);
            rl.close(); // Cerramos la interfaz de lectura, finalizando el programa
        }
    });
}

// Iniciamos el juego llamando a la función adivinarNumero()
adivinarNumero();
