// Importamos las dependencias necesarias
const express = require('express'); // Framework para crear aplicaciones web y APIs
const logger = require('./logger'); // Módulo personalizado para realizar logging

// Creamos una instancia de Express
const app = express();

// Middleware para realizar el logging de las respuestas
app.use((req, res, next) => {
    // Guardar el valor original de res.send
    const originalSend = res.send;

    // Sobrescribimos res.send para capturar el código de estado de la respuesta
    res.send = function (body) {
        // Obtenemos el código de estado actual de la respuesta
        const statusCode = res.statusCode;

        // Log de acuerdo al código de estado
        if (statusCode >= 200 && statusCode < 300) {
            // Log para respuestas exitosas (códigos 200-299)
            logger.info(`[${new Date().toISOString()}] info: Respuesta exitosa con código ${statusCode}`);
        } else if (statusCode >= 400 && statusCode < 500) {
            // Log para errores de cliente (códigos 400-499)
            logger.warn(`[${new Date().toISOString()}] warn: Petición con error cliente (código ${statusCode})`);
        } else if (statusCode >= 500) {
            // Log para errores de servidor (códigos 500 y superiores)
            logger.error(`[${new Date().toISOString()}] error: Error en el servidor (código ${statusCode})`);
        }

        // Llamar a la función original para enviar la respuesta
        originalSend.call(this, body);
    };

    // Continuamos con la ejecución del siguiente middleware en la cadena
    next();
});

// Rutas de ejemplo para probar los diferentes tipos de respuesta

// Ruta principal ('/') para una respuesta exitosa (código 200)
app.get('/', (req, res) => {
    res.status(200).send('Hello World!'); // Respuesta exitosa
});

// Ruta para simular un error de cliente (código 400)
app.get('/client-error', (req, res) => {
    res.status(400).send('Error del cliente'); // Respuesta con error del cliente
});

// Ruta para simular un error de servidor (código 500)
app.get('/server-error', (req, res) => {
    res.status(500).send('Error del servidor'); // Respuesta con error del servidor
});

// Iniciar el servidor en el puerto definido
const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje indicando que el servidor está en ejecución
});


// Pruebas:
// curl http://localhost:3000/
// curl http://localhost:3000/client-error
// curl http://localhost:3000/server-error

// Respuesta:
// Hello World!
// Error del cliente
// Error del servidor