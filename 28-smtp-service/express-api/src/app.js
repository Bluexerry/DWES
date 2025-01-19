// src/app.js

const expressLoader = require('./loaders/express'); // Importa el loader de Express

const app = expressLoader(); // Carga y configura Express

module.exports = app; // Exporta la aplicación para su uso en index.js y tests