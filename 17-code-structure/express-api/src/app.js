// Importa el módulo 'express' para crear la aplicación web.
const express = require('express');

// Importa la función 'loaders' que configura los middlewares, rutas y otros componentes de la aplicación.
const loaders = require('./loaders/expressLoader');

// Crea una instancia de la aplicación Express.
const app = express();

// Llama a la función 'loaders' para configurar la aplicación Express.
// La función 'loaders' recibe la aplicación y le añade configuraciones adicionales (como middlewares, rutas, etc.).
loaders(app);

// Exporta la instancia de la aplicación para que pueda ser utilizada por el servidor.
module.exports = app;
