// leer-sync-actividad.js

const fs = require('fs');
const path = require('path');

const archivoPath = path.join(__dirname, 'ejemploSyn.txt');

console.log('Antes de leer el archivo (Sync)');

try {
    const data = fs.readFileSync(archivoPath, 'utf8');
    console.log('Contenido del archivo (Sync):');
    console.log(data);
} catch (err) {
    console.error('Error al leer el archivo:', err);
}

console.log('Después de leer el archivo (Sync)');
