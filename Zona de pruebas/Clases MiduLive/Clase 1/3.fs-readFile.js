const fs = require('node:fs'); //Importar el módulo fs

console.log('Leyendo el primer archivo...'); //Mensaje de inicio
const text = fs.readFileSync('./archivo.txt', 'utf-8'); //Devuelve un buffer con memoria y utf lo codifica a texto
console.log(text); //Imprime el contenido del archivo

console.log('Leyendo el segundo archivo...'); //Mensaje de inicio
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8'); //Devuelve un buffer con memoria y utf lo codifica a texto
console.log(text2); //Imprime el contenido del archivo

//Lectura de archivos de manera sincrónica (secuencial). Se lee el primer archivo y luego el segundo.