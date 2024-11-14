const fs = require('fs');
const path = require('path');
const readline = require('readline');
const notesDir = path.join(__dirname, '../../notas'); // Ruta a la carpeta de notas

// Asegura que la carpeta exista
if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log('\n--- Editor de Notas ---');
    console.log('1. Crear nueva nota');
    console.log('2. Editar nota existente');
    console.log('3. Eliminar nota');
    console.log('4. Salir');
    rl.question('Elige una opción: ', (opcion) => ejecutarOpcion(opcion));
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1': crearNota(); break;
        case '2': editarNota(); break;
        case '3': eliminarNota(); break;
        case '4': rl.close(); break;
        default: console.log('Opción no válida'); mostrarMenu(); break;
    }
}

// src/controllers/notesController.js

function crearNota() {
    rl.question('Nombre de la nota (sin .note): ', (nombre) => {
        const archivoNota = path.join(notesDir, `${nombre}.note`);
        let contenido = '';
        let lineasVacias = 0;

        console.log('Escribe el contenido de la nota. Presiona Enter dos veces para terminar.');

        // Define el manejador de evento de línea como una función para poder eliminarlo después
        const manejadorLinea = (linea) => {
            if (linea.trim() === '') {
                lineasVacias++;
                if (lineasVacias === 2) {
                    // Guarda la nota en el archivo y muestra el mensaje de confirmación
                    fs.writeFileSync(archivoNota, contenido);
                    console.log(`Nota "${nombre}.note" guardada.`);

                    // Elimina el oyente de línea para evitar problemas
                    rl.removeListener('line', manejadorLinea);

                    // Regresa al menú principal
                    mostrarMenu();
                }
            } else {
                contenido += `${linea}\n`;
                lineasVacias = 0; // Reinicia el contador de líneas vacías
            }
        };

        // Agrega el manejador de línea al evento 'line'
        rl.on('line', manejadorLinea);
    });
}


// src/controllers/notesController.js

function editarNota() {
    fs.readdir(notesDir, (err, archivos) => {
        if (err) throw err;

        if (archivos.length === 0) {
            console.log('No hay notas para editar.');
            mostrarMenu();
            return;
        }

        console.log('Notas disponibles:');
        archivos.forEach((archivo, index) => console.log(`${index + 1}. ${archivo}`));

        rl.question('Elige una nota para editar (número): ', (opcion) => {
            const archivoSeleccionado = path.join(notesDir, archivos[opcion - 1]);
            if (fs.existsSync(archivoSeleccionado)) {
                const contenidoActual = fs.readFileSync(archivoSeleccionado, 'utf8');
                console.log('Contenido actual de la nota:');
                console.log(contenidoActual);
                console.log('Escribe el nuevo contenido. Presiona Enter dos veces para terminar.');

                let nuevoContenido = '';
                let lineasVacias = 0;

                // Definimos el manejador de eventos de línea para editar
                const manejadorLinea = (linea) => {
                    if (linea.trim() === '') {
                        lineasVacias++;
                        if (lineasVacias === 2) {
                            fs.writeFileSync(archivoSeleccionado, nuevoContenido);
                            console.log(`Nota "${archivos[opcion - 1]}" actualizada.`);

                            // Elimina el oyente de línea para evitar conflictos en futuras ediciones
                            rl.removeListener('line', manejadorLinea);

                            // Regresa al menú principal
                            mostrarMenu();
                        }
                    } else {
                        nuevoContenido += `${linea}\n`;
                        lineasVacias = 0; // Reinicia el contador si se ingresa contenido
                    }
                };

                // Agrega el manejador de línea al evento 'line'
                rl.on('line', manejadorLinea);
            } else {
                console.log('Nota no encontrada.');
                mostrarMenu();
            }
        });
    });
}


function eliminarNota() {
    fs.readdir(notesDir, (err, archivos) => {
        if (err) throw err;
        if (archivos.length === 0) {
            console.log('No hay notas para eliminar.');
            mostrarMenu();
            return;
        }

        console.log('Notas disponibles:');
        archivos.forEach((archivo, index) => console.log(`${index + 1}. ${archivo}`));

        rl.question('Elige una nota para eliminar (número): ', (opcion) => {
            const archivoSeleccionado = path.join(notesDir, archivos[opcion - 1]);
            if (fs.existsSync(archivoSeleccionado)) {
                fs.unlinkSync(archivoSeleccionado);
                console.log(`Nota "${archivos[opcion - 1]}" eliminada.`);
                mostrarMenu();
            } else {
                console.log('Nota no encontrada.');
                mostrarMenu();
            }
        });
    });
}

module.exports = { mostrarMenu, ejecutarOpcion };
