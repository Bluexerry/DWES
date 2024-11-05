const { readFile } = require('node:fs/promises'); //Importa el módulo fs para leer archivos

//IIFE - Immediately Invoked Function Expression
; (
    async () => {
        console.log('Leyendo el primer archivo...'); //Mensaje de inicio
        const text = await readFile('./archivo.txt', 'utf-8'); //Lectura del archivo
        console.log('Primer texto: ' + text); //Imprime el contenido del archivos

        console.log('------> Haciendo cosas mientras se lee el archivo...'); //Mensaje intermedio

        console.log('Leyendo el segundo archivo...'); //Mensaje de inicio
        const text2 = await readFile('./archivo2.txt', 'utf-8'); //Lectura del archivo
        console.log('Segundo texto: ' + text2); //Imprime el contenido del archivos

        //Lectura de archivos de manera sincrónica (secuencial). Se lee el primer archivo y luego el segundo.
    }
)(); //Llamada a la función inmediata