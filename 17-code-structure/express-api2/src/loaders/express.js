// Requiere el módulo 'express' para crear la aplicación de servidor y manejar rutas.
const express = require('express');

// Requiere las rutas específicas relacionadas con las operaciones de Fibonacci.
const fibonacciRoutes = require('../routes/fibonacci');

// Requiere el módulo 'logger' para registrar información y advertencias.
const logger = require('../utils/logger');

// Exporta una función que configura las rutas y middlewares para la aplicación.
module.exports = (app) => {
    // Middleware para parsear el cuerpo de las solicitudes a formato JSON.
    app.use(express.json());

    // Configura la ruta base '/fibonacci' para que utilice las rutas definidas en 'fibonacciRoutes'.
    app.use('/fibonacci', fibonacciRoutes);

    // Middleware para manejar cualquier solicitud que no coincida con las rutas anteriores (404 - Not Found).
    app.use((req, res) => {
        // Registra una advertencia cuando una ruta no es encontrada, incluyendo el método HTTP y la URL solicitada.
        logger.warn(`Ruta no encontrada: ${req.method} ${req.originalUrl}`);
        
        // Devuelve una respuesta con el código de estado 404 y un mensaje de error.
        res.status(404).send({ message: 'Not Found' });
    });
};
