const fs = require('node:fs/promises'); // Importa el módulo fs con promises

console.log('Leyendo los archivos...'); // Mensaje de inicio

// Ejecuta la lectura de ambos archivos en paralelo
Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8')
]).then(([data1, data2]) => {
    console.log('Primer texto: ' + data1); // Imprime el contenido del primer archivo
    console.log('Segundo texto: ' + data2); // Imprime el contenido del segundo archivo
}).catch((err) => {
    console.error('Error al leer los archivos:', err); // Muestra un error si ocurre
});

console.log('------> Haciendo cosas mientras se leen los archivos...'); // Mensaje intermedio