// Importamos los módulos necesarios
const fs = require('fs'); // Módulo para interactuar con el sistema de archivos
const path = require('path'); // Módulo para trabajar con rutas de archivos
const readline = require('readline'); // Módulo para leer la entrada del usuario desde la terminal

// Ruta donde se guardarán las notas
const notesDir = path.join(__dirname, 'notas'); // Crea una ruta para la carpeta 'notas' en el directorio actual

// Asegurarse de que la carpeta de notas exista
if (!fs.existsSync(notesDir)) { // Verifica si la carpeta 'notas' ya existe
    fs.mkdirSync(notesDir); // Si no existe, la crea
}

// Interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin, // Fuente de entrada (entrada estándar)
    output: process.stdout // Destino de salida (salida estándar)
});

// Función para mostrar el menú de opciones al usuario
function mostrarMenu() {
    console.log('\n--- Editor de Notas ---'); // Título del menú
    console.log('1. Crear nueva nota'); // Opción para crear una nueva nota
    console.log('2. Editar nota existente'); // Opción para editar una nota existente
    console.log('3. Eliminar nota'); // Opción para eliminar una nota
    console.log('4. Salir'); // Opción para salir del programa

    // Pregunta al usuario por una opción
    rl.question('Elige una opción: ', opcion => {
        ejecutarOpcion(opcion); // Llama a la función para ejecutar la opción seleccionada
    });
}

// Función para ejecutar la opción seleccionada por el usuario
function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1': // Si el usuario elige la opción 1
            crearNota(); // Llama a la función para crear una nota
            break;
        case '2': // Si elige la opción 2
            editarNota(); // Llama a la función para editar una nota
            break;
        case '3': // Si elige la opción 3
            eliminarNota(); // Llama a la función para eliminar una nota
            break;
        case '4': // Si elige la opción 4
            rl.close(); // Cierra la interfaz de lectura y termina el programa
            break;
        default: // Si elige una opción no válida
            console.log('Opción no válida. Inténtalo de nuevo.'); // Mensaje de error
            mostrarMenu(); // Vuelve a mostrar el menú
            break;
    }
}

// Función para crear una nueva nota
function crearNota() {
    // Pregunta al usuario por el nombre de la nueva nota
    rl.question('Nombre de la nota (sin .note): ', nombre => {
        const archivoNota = path.join(notesDir, `${nombre}.note`); // Crea la ruta del archivo para la nueva nota
        let contenido = ''; // Variable para almacenar el contenido de la nota
        let lineasVacias = 0; // Contador de líneas vacías

        console.log('Escribe el contenido de la nota. Presiona Enter dos veces para terminar.'); // Instrucciones

        // Escucha las líneas que el usuario escribe
        rl.on('line', linea => {
            if (linea.trim() === '') { // Si la línea está vacía
                lineasVacias++; // Incrementa el contador de líneas vacías
                if (lineasVacias === 2) { // Si se han presionado dos líneas vacías
                    // Guarda la nota en el archivo
                    fs.writeFileSync(archivoNota, contenido);
                    console.log(`Nota "${nombre}.note" guardada.`); // Mensaje de confirmación
                    rl.removeAllListeners('line'); // Elimina los oyentes de la entrada para evitar conflictos
                    mostrarMenu(); // Vuelve al menú
                }
            } else {
                contenido += linea + '\n'; // Agrega la línea al contenido de la nota
                lineasVacias = 0; // Reinicia el contador si se agrega contenido
            }
        });
    });
}

// Función para editar una nota existente
function editarNota() {
    fs.readdir(notesDir, (err, archivos) => { // Lee los archivos en la carpeta de notas
        if (err) throw err; // Si hay un error, lanza una excepción

        if (archivos.length === 0) { // Si no hay archivos en la carpeta
            console.log('No hay notas para editar.'); // Mensaje de advertencia
            mostrarMenu(); // Vuelve al menú
            return; // Sale de la función
        }

        // Muestra las notas disponibles
        console.log('Notas disponibles:');
        archivos.forEach((archivo, index) => { // Recorre los archivos
            console.log(`${index + 1}. ${archivo}`); // Imprime el nombre del archivo con su índice
        });

        // Pregunta al usuario qué nota desea editar
        rl.question('Elige una nota para editar (número): ', opcion => {
            const archivoSeleccionado = path.join(notesDir, archivos[opcion - 1]); // Crea la ruta del archivo seleccionado
            if (fs.existsSync(archivoSeleccionado)) { // Verifica si el archivo existe
                const contenido = fs.readFileSync(archivoSeleccionado, 'utf8'); // Lee el contenido del archivo
                console.log('Contenido actual de la nota:'); // Mensaje informativo
                console.log(contenido); // Muestra el contenido actual de la nota
                console.log('Escribe el nuevo contenido. Presiona Enter dos veces para terminar.'); // Instrucciones

                let nuevoContenido = ''; // Variable para almacenar el nuevo contenido
                rl.on('line', linea => {
                    if (linea.trim() === '' && nuevoContenido.trim() === '') { // Si se presionan dos líneas vacías
                        fs.writeFileSync(archivoSeleccionado, nuevoContenido); // Guarda el nuevo contenido en el archivo
                        console.log(`Nota "${archivos[opcion - 1]}" actualizada.`); // Mensaje de confirmación
                        rl.removeAllListeners('line'); // Elimina los oyentes de la entrada
                        mostrarMenu(); // Vuelve al menú
                    } else {
                        nuevoContenido += linea + '\n'; // Agrega la línea al nuevo contenido
                    }
                });
            } else {
                console.log('Nota no encontrada.'); // Mensaje de error si no se encuentra la nota
                mostrarMenu(); // Vuelve al menú
            }
        });
    });
}

// Función para eliminar una nota
function eliminarNota() {
    fs.readdir(notesDir, (err, archivos) => { // Lee los archivos en la carpeta de notas
        if (err) throw err; // Si hay un error, lanza una excepción

        if (archivos.length === 0) { // Si no hay archivos en la carpeta
            console.log('No hay notas para eliminar.'); // Mensaje de advertencia
            mostrarMenu(); // Vuelve al menú
            return; // Sale de la función
        }

        // Muestra las notas disponibles
        console.log('Notas disponibles:');
        archivos.forEach((archivo, index) => { // Recorre los archivos
            console.log(`${index + 1}. ${archivo}`); // Imprime el nombre del archivo con su índice
        });

        // Pregunta al usuario qué nota desea eliminar
        rl.question('Elige una nota para eliminar (número): ', opcion => {
            const archivoSeleccionado = path.join(notesDir, archivos[opcion - 1]); // Crea la ruta del archivo seleccionado
            if (fs.existsSync(archivoSeleccionado)) { // Verifica si el archivo existe
                fs.unlinkSync(archivoSeleccionado); // Elimina el archivo
                console.log(`Nota "${archivos[opcion - 1]}" eliminada.`); // Mensaje de confirmación
                mostrarMenu(); // Vuelve al menú
            } else {
                console.log('Nota no encontrada.'); // Mensaje de error si no se encuentra la nota
                mostrarMenu(); // Vuelve al menú
            }
        });
    });
}

// Iniciar el editor, verificando si hay argumentos
const opcion = process.argv[2]; // Toma el argumento de la línea de comandos (si hay alguno)
// Si se proporciona un argumento, ejecuta la opción correspondiente
if (opcion) {
    ejecutarOpcion(opcion); // Llama a la función para ejecutar la opción
} else {
    mostrarMenu(); // Si no hay argumento, muestra el menú
}
