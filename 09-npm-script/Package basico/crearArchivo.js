const fs = require('fs');

// Nombre del directorio que quieres crear
const nombreDirectorio = 'mi_carpeta_vacia';

// Crea el directorio
fs.mkdir(nombreDirectorio, { recursive: true }, (err) => {
    if (err) {
        console.error('Error al crear el directorio:', err);
        return;
    }
    console.log('Directorio creado con éxito.');
});
