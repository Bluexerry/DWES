function piedraPapelTijera() {
    const strings = ["piedra", "papel", "tijera"];

    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function juego() {
    readline.question("\nElige 1 = Piedra, 2 = Papel, 3 = Tijera\n", (eleccion) => {
        let respuestaUsuario;

        // Convertir la entrada del usuario a "piedra", "papel" o "tijera"
        if (eleccion == 1) {
            respuestaUsuario = "piedra";
        } else if (eleccion == 2) {
            respuestaUsuario = "papel";
        } else if (eleccion == 3) {
            respuestaUsuario = "tijera";
        } else {
            console.log("Debes ingresar un valor válido (1, 2 o 3)");
            return juego();  // Reinicia el juego si la entrada es inválida
        }

        const eleccionMaquina = piedraPapelTijera();

        console.log("\nLa máquina ha elegido " + eleccionMaquina);
        console.log("Tú has elegido " + respuestaUsuario + "\n");

        if (
            (respuestaUsuario === "piedra" && eleccionMaquina === "tijera") ||
            (respuestaUsuario === "papel" && eleccionMaquina === "piedra") ||
            (respuestaUsuario === "tijera" && eleccionMaquina === "papel")
        ) {
            console.log("HAS GANADO");
        } else if (respuestaUsuario === eleccionMaquina) {
            console.log("EMPATE");
        } else {
            console.log("HAS PERDIDO");
        }

        readline.close();
    });
}

juego();