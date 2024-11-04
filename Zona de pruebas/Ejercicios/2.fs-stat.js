const fs = require('node:fs') // Importar el módulo fs, importante poner node:

const stats = fs.statSync('./archivo.txt')
console.log(
  stats.isFile(), // Si es un archivo
  stats.isDirectory(), // Si es un directorio
  stats.isSymbolicLink(), // Si es un enlace simbólico
  stats.size // Tamaño del archivo
)
