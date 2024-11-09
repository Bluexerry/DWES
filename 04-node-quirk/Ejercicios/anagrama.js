// Importamos el módulo 'readline' que permite interactuar con la consola para recibir entradas del usuario.
const readline = require('readline');

// Creamos una interfaz de lectura y escritura en la consola.
const rl = readline.createInterface({
    input: process.stdin,  // Entradas del usuario desde la consola.
    output: process.stdout // Salidas hacia la consola.
});

// Pedimos al usuario que ingrese el primer argumento (palabra o cadena).
rl.question('Introduce el primer argumento: ', (arg1) => {
    // Pedimos al usuario que ingrese el segundo argumento (palabra o cadena).
    rl.question('Introduce el segundo argumento: ', (arg2) => {

        let contador = 0; // Variable para contar las coincidencias de caracteres entre las dos palabras.
        let contadorPalabras = arg1.length; // Guardamos la longitud de la primera palabra para comparar después.

        // Comprobamos si las dos palabras tienen la misma longitud. Si no, mostramos un mensaje y cerramos la interfaz.
        if (arg1.length != arg2.length) {
            console.log("Los argumentos deben tener la misma longitud");
            rl.close(); // Cerramos la interfaz de lectura.
            return; // Terminamos la ejecución de la función si las longitudes no coinciden.
        } else if (arg1 === arg2) { // Si las palabras son exactamente iguales, no pueden ser anagramas.
            console.log("Dos palabras iguales no pueden ser anagramas");
            rl.close(); // Cerramos la interfaz de lectura.
            return; // Terminamos la ejecución de la función si las palabras son iguales.
        }

        // Bucle que recorre cada carácter de la primera palabra (arg1).
        for (let i = 0; i < arg1.length; i++) {
            let indice = arg1.charAt(i); // Obtenemos el carácter de la palabra en la posición 'i'.
            // Bucle que recorre cada carácter de la segunda palabra (arg2).
            for (let j = 0; j < arg2.length; j++) {
                // Si encontramos una coincidencia de caracteres entre arg1 y arg2, incrementamos el contador.
                if (indice === arg2.charAt(j)) {
                    contador++; // Aumentamos el contador de coincidencias.
                    break; // Salimos del segundo bucle ya que encontramos una coincidencia.
                }
            }
        }

        // Si el contador es igual a la longitud de la primera palabra, las palabras son anagramas.
        if (contador === contadorPalabras) {
            console.log("Las palabras son anagramas");
        } else { // Si no coinciden todos los caracteres, las palabras no son anagramas.
            console.log("Las palabras no son anagramas");
        }

        rl.close(); // Cerramos la interfaz de lectura una vez finalizado el proceso.
    });
});
