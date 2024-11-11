// server.js o app.js
const express = require('express');
const logger = require('./logger');

const app = express();

// Middleware para el logging de las respuestas
app.use((req, res, next) => {
    // Guardar el valor original de res.send
    const originalSend = res.send;

    // Sobrescribir res.send para capturar el código de estado
    res.send = function (body) {
        const statusCode = res.statusCode;

        // Log de acuerdo al código de estado
        if (statusCode >= 200 && statusCode < 300) {
            logger.info(`[${new Date().toISOString()}] info: Respuesta exitosa con código ${statusCode}`);
        } else if (statusCode >= 400 && statusCode < 500) {
            logger.warn(`[${new Date().toISOString()}] warn: Petición con error cliente (código ${statusCode})`);
        } else if (statusCode >= 500) {
            logger.error(`[${new Date().toISOString()}] error: Error en el servidor (código ${statusCode})`);
        }

        // Llamar a la función original para enviar la respuesta
        originalSend.call(this, body);
    };

    // Continuar con la ejecución del siguiente middleware
    next();
});

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/client-error', (req, res) => {
    res.status(400).send('Error del cliente');
});

app.get('/server-error', (req, res) => {
    res.status(500).send('Error del servidor');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Pruebas:
// curl http://localhost:3000/
// curl http://localhost:3000/client-error
// curl http://localhost:3000/server-error

// Respuesta:
// Hello World!
// Error del cliente
// Error del servidor