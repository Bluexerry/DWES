function piedraPapelTijera() {
    // Definimos tres strings
    const strings = [
        "piedra",
        "papel",
        "tijera"
    ];

    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("\nElige Piedra, Papel, Tijera\n", eleccion => {
    readline.close();

    let eleccionMaquina = piedraPapelTijera();

    if (eleccion.toLowerCase() !== "piedra" || eleccion.toLowerCase() !== "papel" || eleccion.toLowerCase() !== "tijera") {
        console.log("Debes ingresar un valor valido");
        return;
    }

    console.log("\nLa maquina ha elegido " + eleccionMaquina);
    console.log("Tu has elegido " + eleccion + "\n");

    if (eleccion.toLowerCase() === "piedra" && eleccionMaquina.toLowerCase() === "tijera") {
        console.log("HAS GANADO");
    } else if (eleccion.toLowerCase() === "piedra" && eleccionMaquina.toLowerCase() === "papel") {
        console.log("HAS PERDIDO");
    } else if (eleccion.toLowerCase() === "papel" && eleccionMaquina.toLowerCase() === "tijera") {
        console.log("HAS PERDIDO");
    } else if (eleccion.toLowerCase() === "papel" && eleccionMaquina.toLowerCase() === "piedra") {
        console.log("HAS GANADO");
    } else if (eleccion.toLowerCase() === "tijera" && eleccionMaquina.toLowerCase() === "piedra") {
        console.log("HAS PERDIDO");
    } else if (eleccion.toLowerCase() === "tijera" && eleccionMaquina.toLowerCase() === "papel") {
        console.log("HAS GANADO");
    } else if (eleccion.toLowerCase() === eleccionMaquina.toLowerCase()) {
        console.log("EMPATE");
    }
});