// imprimir.js
const chalk = require('chalk');

const color = process.argv[2];
const texto = process.argv[3];

if (color === 'azul') {
    console.log(chalk.blue(texto));
} else if (color === 'rojo') {
    console.log(chalk.red(texto));
} else if (color === 'verde') {
    console.log(chalk.green(texto));
} else {
    console.log('Color no soportado. Usa azul, rojo o verde.');
}

// Para ejecutar el script imprimir.js con el texto "HolaMundo" en color azul, debes ejecutar el siguiente comando:
// npm run imprime -- azul "Texto en azul"
// npm run imprime -- rojo "Texto en rojo"
// npm run imprime -- verde "Texto en verde"
