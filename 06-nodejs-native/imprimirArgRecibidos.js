// Importamos el módulo 'fs' (file system) para poder trabajar con el sistema de archivos.
// Este módulo nos permite leer y escribir archivos, entre otras cosas.
const fs = require('fs');

// Obtenemos el nombre del fichero desde los argumentos que se pasan en la línea de comandos.
// "process.argv" es un array que contiene todos los argumentos que se pasan al ejecutar el programa.
// El índice 2 corresponde al primer argumento después de "node nombre_del_archivo.js".
const fileName = process.argv[2];

// Verificamos si se ha proporcionado el nombre del fichero.
// Si "fileName" está indefinido o es una cadena vacía, significa que no se ha pasado un nombre de archivo.
if (!fileName) {
    // Si no se proporciona ningún nombre de fichero, mostramos un mensaje de error en la consola.
    console.log("Por favor, proporciona el nombre del fichero como argumento.");
} else {
    // Si se ha proporcionado un nombre de archivo, intentamos leer su contenido de manera asíncrona.
    // Usamos "fs.readFile" que toma el nombre del archivo, el formato de codificación ('utf8'), y una función callback.
    fs.readFile(fileName, 'utf8', (err, data) => {
        // Si ocurre un error durante la lectura del archivo (por ejemplo, si no existe o no es accesible),
        if (err) {
            // Mostramos un mensaje de error con la descripción del error (err.message).
            console.log("Error al leer el fichero:", err.message);
        } else {
            // Si el archivo se ha leído correctamente, mostramos su contenido en la consola.
            console.log(data);
        }
    });
}