// Importamos el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Obtenemos el nombre del fichero del primer argumento de la línea de comandos
const fileName = process.argv[2];

// Verificamos si se ha proporcionado el nombre del fichero
if (!fileName) {
    // Si no se proporciona ningún argumento, mostramos un mensaje al usuario
    console.log("Por favor, proporciona el nombre del fichero como argumento.");
} else {
    // Intentamos leer el fichero de forma asíncrona
    fs.readFile(fileName, 'utf8', (err, data) => {
        // Si ocurre un error al leer el fichero (por ejemplo, si no existe)
        if (err) {
            // Mostramos un mensaje indicando que hubo un error al leer el fichero
            console.log("Error al leer el fichero:", err.message);
        } else {
            // Si no hay errores, imprimimos el contenido del fichero
            console.log(data);
        }
    });
}