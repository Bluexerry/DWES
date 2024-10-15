// leer-async-actividad.js

const fs = require('fs');
const path = require('path');

const archivoPath = path.join(__dirname, 'ejemploAsyn.txt');

console.log('Antes de leer el archivo (Async)');

fs.readFile(archivoPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo (Async):');
    console.log(data);
});

console.log('Después de leer el archivo (Async)');
