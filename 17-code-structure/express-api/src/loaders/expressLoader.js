// Importa el módulo 'express' para crear la aplicación web.
const express = require('express');

// Importa 'cors' para habilitar CORS (Cross-Origin Resource Sharing), permitiendo solicitudes entre dominios diferentes.
const cors = require('cors');

// Importa la ruta para la funcionalidad de 'ping', donde se manejará la solicitud de comprobación del estado del servidor.
const pingRoute = require('../routes/pingRoute');

// Exporta una función que configura los middlewares y las rutas de la aplicación Express.
module.exports = (app) => {
    // Habilita CORS para permitir solicitudes desde diferentes orígenes (dominios).
    app.use(cors());

    // Permite que la aplicación maneje solicitudes con cuerpo JSON.
    app.use(express.json());

    // Carga la ruta '/api/ping' que se conecta con el archivo 'pingRoute.js'.
    // Esto significa que cuando se acceda a '/api/ping', la lógica definida en pingRoute será ejecutada.
    app.use('/api/ping', pingRoute);

    // Middleware para manejar solicitudes a rutas no definidas (404 - Not Found).
    // Si una solicitud llega a una ruta que no existe en la aplicación, responderá con un mensaje de error.
    app.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};
