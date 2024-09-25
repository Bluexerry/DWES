const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("¡Bienvenido al juego de adivinar el número! Estoy pensando en un número entre 1 y 100.");

function adivinarNumero() {
    rl.question('Adivina el número: ', (respuesta) => {
        const numeroUsuario = respuesta;

        if (isNaN(numeroUsuario)) {
            console.log("Por favor, ingresa un número válido.");
            adivinarNumero(); // Volver a solicitar el número
        } else if (numeroUsuario < numeroSecreto) {
            console.log("¡Demasiado bajo!");
            adivinarNumero();
        } else if (numeroUsuario > numeroSecreto) {
            console.log("¡Demasiado alto!");
            adivinarNumero();
        } else {
            console.log("¡Felicidades! Adivinaste el número " + numeroSecreto);
            rl.close();
        }
    });
}

// Comenzar el juego
adivinarNumero();