const path = require('node:path');

//Unix -> /
//Windows -> \
console.log(path.sep); //Imprime el separador de rutas del sistema operativo

//Unir rutas con path.join()
const filePath = path.join('carpeta', 'subcarpeta', 'archivo.txt');
console.log(filePath); //Imprime la ruta unida

const base = path.basename(filePath);
console.log(base); //Imprime el nombre del archivo

const fileName = path.basename(filePath, '.txt');
console.log(fileName); //Imprime el nombre del archivo sin la extensión

const extension = path.extname(filePath);
console.log(extension); //Imprime la extensión del archivo
