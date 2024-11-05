const fs = require('node:fs/promises'); //Importar el módulo fs con promises

console.log('Leyendo el primer archivo...'); //Mensaje de inicio

fs.readFile('./archivo.txt', 'utf-8').then((data) => {
    console.log('Primer texto: ' + data); //Imprime el contenido del archivo
});

console.log('------> Haciendo cosas mientras se lee el archivo...'); //Mensaje intermedio

console.log('Leyendo el segundo archivo...'); //Mensaje de inicio

fs.readFile('./archivo2.txt', 'utf-8').then((data) => {
    console.log('Segundo texto: ' + data); //Imprime el contenido del archivo   
});

//Lectura de archivos de manera sincrónica (secuencial). Se lee el primer archivo y luego el segundo.