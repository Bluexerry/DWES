// Función que elige aleatoriamente entre "piedra", "papel" y "tijera" para simular la elección de la máquina
function piedraPapelTijera() {
    // Creamos un arreglo con las opciones posibles
    const strings = ["piedra", "papel", "tijera"];

    // Generamos un índice aleatorio entre 0 y 2 para seleccionar una opción
    const randomIndex = Math.floor(Math.random() * strings.length);
    // Devolvemos la opción seleccionada aleatoriamente
    return strings[randomIndex];
}

// Importamos el módulo 'readline' para permitir la interacción con el usuario en la consola
const readline = require('readline').createInterface({
    input: process.stdin,   // Establecemos la entrada de datos desde el teclado
    output: process.stdout  // Establecemos la salida de datos hacia la consola
});

// Función que ejecuta el juego "Piedra, Papel o Tijera"
function juego() {
    // Pregunta al usuario qué opción quiere elegir (1 = Piedra, 2 = Papel, 3 = Tijera)
    readline.question("\nElige 1 = Piedra, 2 = Papel, 3 = Tijera\n", (eleccion) => {
        let respuestaUsuario;

        // Convertimos la elección del usuario a su equivalente en texto ("piedra", "papel" o "tijera")
        if (eleccion == 1) {
            respuestaUsuario = "piedra";
        } else if (eleccion == 2) {
            respuestaUsuario = "papel";
        } else if (eleccion == 3) {
            respuestaUsuario = "tijera";
        } else {
            // Si el usuario ingresa un valor inválido, mostramos un mensaje de error y reiniciamos el juego
            console.log("Debes ingresar un valor válido (1, 2 o 3)");
            return juego();  // Llamamos a la función de nuevo para que el usuario vuelva a intentar
        }

        // Llamamos a la función 'piedraPapelTijera' para obtener la elección aleatoria de la máquina
        const eleccionMaquina = piedraPapelTijera();

        // Mostramos las elecciones de la máquina y del usuario en la consola
        console.log("\nLa máquina ha elegido " + eleccionMaquina);
        console.log("Tú has elegido " + respuestaUsuario + "\n");

        // Evaluamos las posibles condiciones para determinar el resultado del juego
        if (
            (respuestaUsuario === "piedra" && eleccionMaquina === "tijera") ||
            (respuestaUsuario === "papel" && eleccionMaquina === "piedra") ||
            (respuestaUsuario === "tijera" && eleccionMaquina === "papel")
        ) {
            console.log("HAS GANADO"); // El usuario gana si su elección vence a la de la máquina
        } else if (respuestaUsuario === eleccionMaquina) {
            console.log("EMPATE"); // Hay empate si ambas elecciones son iguales
        } else {
            console.log("HAS PERDIDO"); // El usuario pierde si la elección de la máquina lo vence
        }

        // Cerramos la interfaz de 'readline' al finalizar el juego
        readline.close();
    });
}

// Iniciamos el juego llamando a la función 'juego'
juego();
