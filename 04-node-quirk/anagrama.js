const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer argumento: ', (arg1) => {
    rl.question('Introduce el segundo argumento: ', (arg2) => {

        let contador = 0;
        let contadorPalabras = arg1.length;

        if (arg1.length != arg2.length) {
            console.log("Los argumentos deben tener la misma longitud");
            rl.close();
            return;
        } else if (arg1 === arg2) {
            console.log("Dos palabras iguales no pueden ser anagramas");
            rl.close();
            return;
        }
        for (let i = 0; i < arg1.length; i++) {
            let indice = arg1.charAt(i);
            for (let j = 0; j < arg2.length; j++) {
                if (indice === arg2.charAt(j)) {
                    contador++;
                    break;
                }
            }
        }
        if (contador === contadorPalabras) {
            console.log("Las palabras son anagramas");
        } else {
            console.log("Las palabras no son anagramas");
        }
        rl.close();
    });
});