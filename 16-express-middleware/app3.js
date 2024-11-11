const express = require('express');
const morgan = require('morgan');
const logger = require('./logger'); // Importamos el logger desde 'logger.js'

// Crear la aplicación Express
const app = express();

// Middleware para el registro de accesos a la API con Morgan
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message.trim())  // Pasamos los logs de Morgan a nuestro logger
    }
}));

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API');
});

// Ruta que fuerza un error para probar el middleware de manejo de errores
app.get('/error', (req, res, next) => {
    next(new Error('Forzado error de prueba')); // Llamamos a next para pasar el error
});

// Middleware para el manejo de errores
app.use((err, req, res, next) => { // Ignoramos el error de eslint de que next no esta definido
    // Registra el error con el logger
    logger.error('Server Error: ' + err.message);
    // Responde con un error 500
    res.status(500).json({ error: 'Server Error' });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});

/* Debes tener en cuenta que las formas de definir un servidor son usando las variables de la siguiente manera:
req, res
req, res, next
error, req, res, next

Por esto, no te rayes si eslint te da error de que next no esta definido, hace falta tenerlo de todas formas para que
la solicitud que se haga con curl funcione.

ERE UN CRAK, GUAPO, TIO WENO, TIO MUSCULOSO*/

// Pruebas:
// curl http://localhost:3000/
// curl http://localhost:3000/error

// Respuesta:
// Bienvenido a la API
// {"error":"Server Error"}
