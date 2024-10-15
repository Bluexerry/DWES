const fs = require('fs');

// Nombre del directorio que quieres crear
const nombreDirectorio = 'ejemplo.js';

// Crea el directorio
fs.mkdir(nombreDirectorio, { recursive: true }, (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
        return;
    }
    console.log('Archivo creado con éxito.');
});
