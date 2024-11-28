const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Ruta absoluta del directorio de notas
const notesDir = path.join(
    'C:\\Users\\jesus\\Desktop\\DWES\\00-editor_notas\\3. Editor de notas con express, estructura y test de Postman\\notas'
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear el directorio 'notas' si no existe
if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
}

function showMenu() {
    console.log(`
    1. Crear nueva nota
    2. Editar nota existente
    3. Eliminar nota
    4. Salir
    `);
    rl.question('Seleccione una opción: ', (option) => {
        handleOption(option);
    });
}

function handleOption(option) {
    switch (option) {
        case '1':
            createNote();
            break;
        case '2':
            editNote();
            break;
        case '3':
            deleteNote();
            break;
        case '4':
            rl.close();
            break;
        default:
            console.log('Opción no válida');
            showMenu();
            break;
    }
}

function createNote() {
    rl.question('Ingrese el nombre de la nota: ', (name) => {
        const filePath = path.join(notesDir, `${name}.note`);
        let content = '';
        console.log('Escriba el contenido de la nota. Para finalizar, ingrese dos líneas en blanco consecutivas.');
        rl.on('line', (input) => {
            if (input === '' && content.endsWith('\n\n')) {
                fs.writeFileSync(filePath, content.trim());
                console.log('Nota creada.');
                rl.removeAllListeners('line');
                rl.close();
            } else {
                content += input + '\n';
            }
        });
    });
}

function editNote() {
    const notes = fs.readdirSync(notesDir).filter(file => file.endsWith('.note'));
    if (notes.length === 0) {
        console.log('No hay notas disponibles.');
        rl.close();
        return;
    }
    console.log('Notas disponibles:');
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note}`);
    });
    rl.question('Seleccione una nota para editar: ', (index) => {
        const note = notes[parseInt(index) - 1];
        if (!note) {
            console.log('Selección no válida.');
            rl.close();
            return;
        }
        const filePath = path.join(notesDir, note);
        let content = fs.readFileSync(filePath, 'utf-8');
        console.log('Contenido actual de la nota:');
        console.log(content);
        console.log('Escriba el nuevo contenido de la nota. Para finalizar, ingrese dos líneas en blanco consecutivas.');
        rl.on('line', (input) => {
            if (input === '' && content.endsWith('\n\n')) {
                fs.writeFileSync(filePath, content.trim());
                console.log('Nota actualizada.');
                rl.removeAllListeners('line');
                rl.close();
            } else {
                content += input + '\n';
            }
        });
    });
}

function deleteNote() {
    const notes = fs.readdirSync(notesDir).filter(file => file.endsWith('.note'));
    if (notes.length === 0) {
        console.log('No hay notas disponibles.');
        rl.close();
        return;
    }
    console.log('Notas disponibles:');
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note}`);
    });
    rl.question('Seleccione una nota para eliminar: ', (index) => {
        const note = notes[parseInt(index) - 1];
        if (!note) {
            console.log('Selección no válida.');
            rl.close();
            return;
        }
        const filePath = path.join(notesDir, note);
        fs.unlinkSync(filePath);
        console.log('Nota eliminada.');
        rl.close();
    });
}

// Ejecutar la función correspondiente según el argumento de línea de comandos
const args = process.argv.slice(2);
if (args.length > 0) {
    handleOption(args[0]);
} else {
    showMenu();
}