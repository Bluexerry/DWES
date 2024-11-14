// Requiere el módulo 'express', que se utiliza para crear la aplicación del servidor.
const express = require('express');

// Requiere los "loaders", que son funciones que configuran y cargan diversas partes de la aplicación, como rutas y middlewares.
const loaders = require('./loaders/express');

// Crea una nueva instancia de la aplicación Express.
const app = express();

// Llama a la función 'loaders' y pasa la instancia de la aplicación 'app'. Esta función configurará y cargará rutas, middlewares, y otros aspectos de la aplicación.
loaders(app);

// Exporta la instancia de la aplicación para que pueda ser utilizada en otras partes del proyecto, como en el archivo principal que arranca el servidor.
module.exports = app;
