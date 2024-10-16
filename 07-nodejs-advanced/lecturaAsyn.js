// leer-async-actividad.js

// Importamos el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Importamos el módulo 'path' para trabajar con rutas de archivos de manera compatible entre sistemas operativos
const path = require('path');

// Definimos la ruta absoluta del archivo 'ejemploAsyn.txt' usando 'path.join' y '__dirname' para asegurar que funcione en cualquier sistema operativo
const archivoPath = path.join(__dirname, 'ejemploAsyn.txt');

// Imprimimos un mensaje en la consola antes de leer el archivo, para mostrar cuándo comienza el proceso
console.log('Antes de leer el archivo (Async)');

// Usamos 'fs.readFile' para leer el archivo de forma asíncrona
// Esto significa que el proceso de lectura no bloqueará la ejecución del resto del código mientras el archivo se está leyendo
fs.readFile(archivoPath, 'utf8', (err, data) => {
    // Si ocurre un error al intentar leer el archivo (por ejemplo, si el archivo no existe)
    if (err) {
        // Imprimimos el error en la consola y terminamos la ejecución de esta callback
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Si no hay errores, imprimimos el contenido del archivo
    console.log('Contenido del archivo (Async):');
    console.log(data);  // Mostramos el contenido del archivo en la consola
});

// Imprimimos un mensaje en la consola inmediatamente después de haber llamado a 'fs.readFile'
// Debido a que 'fs.readFile' es asíncrono, este mensaje se imprime antes de que el archivo haya sido leído
console.log('Después de leer el archivo (Async)');
