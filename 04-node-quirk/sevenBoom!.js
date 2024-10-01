const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el argumento: ', (arg) => {

    let contador = 0;

    if (isNaN(arg)) {
        console.log("El argumento debe ser un número");
        rl.close();
        return;

    }
    for (let i = 0; i < arg.length; i++) {
        if (arg.charAt(i) == 7) {
            console.log("Boom!");
            rl.close();
            return;
        } else {
            contador++;
        }
    }

    if (contador === arg.length) {
        console.log("No hay 7 en el argumento");
    }
    rl.close();
});