// index.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Ruta de la carpeta de notas
const notasDir = path.join(__dirname, 'notas');

// Crear la carpeta de notas si no existe
if (!fs.existsSync(notasDir)) {
    fs.mkdirSync(notasDir);
}

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostrar el menú principal
function mostrarMenu() {
    console.log('\n--- Editor de Notas ---');
    console.log('1. Crear nueva nota');
    console.log('2. Editar nota existente');
    console.log('3. Eliminar nota');
    console.log('4. Salir');
    rl.question('Seleccione una opción: ', (respuesta) => {
        switch (respuesta.trim()) {
            case '1':
                crearNota();
                break;
            case '2':
                editarNota();
                break;
            case '3':
                eliminarNota();
                break;
            case '4':
                console.log('¡Hasta luego!');
                rl.close();
                break;
            default:
                console.log('Opción no válida. Por favor, intente de nuevo.');
                mostrarMenu();
        }
    });
}

// Función para crear una nueva nota
function crearNota() {
    rl.question('Ingrese el nombre de la nueva nota (sin extensión): ', (nombre) => {
        if (!nombre) {
            console.log('El nombre no puede estar vacío.');
            return mostrarMenu();
        }
        const rutaNota = path.join(notasDir, `${nombre}.note`);
        if (fs.existsSync(rutaNota)) {
            console.log('Ya existe una nota con ese nombre.');
            return mostrarMenu();
        }
        console.log('Ingrese el contenido de la nota. Para finalizar, ingrese dos líneas en blanco consecutivas.');
        const contenido = [];
        let lineaAnteriorVacia = false;

        rl.prompt();
        rl.on('line', (input) => {
            if (input.trim() === '') {
                if (lineaAnteriorVacia) {
                    // Guardar la nota
                    fs.writeFileSync(rutaNota, contenido.join('\n'), 'utf8');
                    console.log(`Nota "${nombre}.note" guardada exitosamente.`);
                    rl.removeAllListeners('line');
                    mostrarMenu();
                } else {
                    lineaAnteriorVacia = true;
                }
            } else {
                contenido.push(input);
                lineaAnteriorVacia = false;
            }
        });
    });
}

// Función para listar todas las notas
function listarNotas() {
    const archivos = fs.readdirSync(notasDir).filter(file => file.endsWith('.note'));
    if (archivos.length === 0) {
        console.log('No hay notas disponibles.');
        return [];
    }
    console.log('\nNotas disponibles:');
    archivos.forEach((archivo, index) => {
        console.log(`${index + 1}. ${archivo}`);
    });
    return archivos;
}

// Función para editar una nota existente
function editarNota() {
    const notas = listarNotas();
    if (notas.length === 0) {
        return mostrarMenu();
    }
    rl.question('Seleccione el número de la nota que desea editar: ', (respuesta) => {
        const indice = parseInt(respuesta.trim(), 10) - 1;
        if (isNaN(indice) || indice < 0 || indice >= notas.length) {
            console.log('Selección no válida.');
            return mostrarMenu();
        }
        const notaSeleccionada = notas[indice];
        const rutaNota = path.join(notasDir, notaSeleccionada);
        let contenido = fs.readFileSync(rutaNota, 'utf8').split('\n');
        console.log(`\n--- Editando "${notaSeleccionada}" ---`);
        console.log('Presione Enter para mantener la línea actual o ingrese nuevo contenido.');
        contenido.forEach((linea, idx) => {
            rl.question(`Línea ${idx + 1} (${linea}): `, (nuevaLinea) => {
                if (nuevaLinea.trim() !== '') {
                    contenido[idx] = nuevaLinea;
                }
                if (idx === contenido.length - 1) {
                    console.log('Ingrese contenido adicional. Para finalizar, ingrese dos líneas en blanco consecutivas.');
                    let lineaAnteriorVacia = false;

                    rl.on('line', (input) => {
                        if (input.trim() === '') {
                            if (lineaAnteriorVacia) {
                                // Guardar la nota
                                fs.writeFileSync(rutaNota, contenido.join('\n'), 'utf8');
                                console.log(`Nota "${notaSeleccionada}" actualizada exitosamente.`);
                                rl.removeAllListeners('line');
                                mostrarMenu();
                            } else {
                                lineaAnteriorVacia = true;
                            }
                        } else {
                            contenido.push(input);
                            lineaAnteriorVacia = false;
                        }
                    });
                }
            });
        });
    });
}

// Función para eliminar una nota
function eliminarNota() {
    const notas = listarNotas();
    if (notas.length === 0) {
        return mostrarMenu();
    }
    rl.question('Seleccione el número de la nota que desea eliminar: ', (respuesta) => {
        const indice = parseInt(respuesta.trim(), 10) - 1;
        if (isNaN(indice) || indice < 0 || indice >= notas.length) {
            console.log('Selección no válida.');
            return mostrarMenu();
        }
        const notaSeleccionada = notas[indice];
        rl.question(`¿Está seguro que desea eliminar "${notaSeleccionada}"? (s/n): `, (confirmacion) => {
            if (confirmacion.toLowerCase() === 's') {
                fs.unlinkSync(path.join(notasDir, notaSeleccionada));
                console.log(`Nota "${notaSeleccionada}" eliminada exitosamente.`);
            } else {
                console.log('Operación cancelada.');
            }
            mostrarMenu();
        });
    });
}

// Iniciar el menú principal
mostrarMenu();
