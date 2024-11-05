const fs = require('node:fs/promises'); // Importa el módulo fs con promises

console.log('Leyendo los archivos...'); // Mensaje de inicio

// Ejecuta la lectura de ambos archivos en paralelo
async function run() {
    
    try {
        const [data1, data2] = await Promise.allSettled([
            fs.readFile('./archivo.txt', 'utf-8'),
            fs.readFile('./archivo2.txt', 'utf-8')
        ])
        console.log('Primer texto: ' + data1.value); // Imprime el contenido del primer archivo
        console.log('Segundo texto: ' + data2.value); // Imprime el contenido del segundo archivo
    } catch (error) {
        console.error('Error al leer los archivos:', err); // Muestra un error si ocurre
    }
}

run(); // Ejecuta la función run

console.log('------> Haciendo cosas mientras se leen los archivos...'); // Mensaje intermedio

