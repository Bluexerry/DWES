// leer-sync-actividad.js

// Importamos el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Importamos el módulo 'path' para gestionar las rutas de archivos de manera compatible entre sistemas operativos
const path = require('path');

// Definimos la ruta absoluta del archivo 'ejemploSyn.txt' usando 'path.join' y '__dirname' para asegurar que funcione en cualquier sistema operativo
const archivoPath = path.join(__dirname, 'ejemploSyn.txt');

// Imprimimos un mensaje en la consola antes de leer el archivo
console.log('Antes de leer el archivo (Sync)');

try {
    // Usamos 'fs.readFileSync' para leer el archivo de forma **síncrona**
    // Esto bloquea el flujo de ejecución del programa hasta que se termine de leer el archivo
    const data = fs.readFileSync(archivoPath, 'utf8');

    // Si la lectura tiene éxito, imprimimos el contenido del archivo en la consola
    console.log('Contenido del archivo (Sync):');
    console.log(data);
} catch (err) {
    // Si ocurre un error durante la lectura (por ejemplo, si el archivo no existe), se captura la excepción y se imprime un mensaje de error
    console.error('Error al leer el archivo:', err);
}

// Imprimimos un mensaje en la consola después de que se haya completado la lectura del archivo
console.log('Después de leer el archivo (Sync)');
