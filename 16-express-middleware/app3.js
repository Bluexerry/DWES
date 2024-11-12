// Importamos las dependencias necesarias
const express = require('express'); // Framework para crear la aplicación web
const morgan = require('morgan'); // Middleware para registro de solicitudes HTTP
const logger = require('./logger'); // Importamos el logger personalizado desde 'logger.js'

// Crear la aplicación Express
const app = express();

// Middleware para el registro de accesos a la API con Morgan
app.use(morgan('combined', {
    stream: {
        // Redirige los logs de Morgan al logger personalizado
        write: (message) => logger.info(message.trim())  // .trim() elimina espacios en blanco innecesarios
    }
}));

// Rutas de ejemplo
app.get('/', (req, res) => {
    // Responde con un mensaje de bienvenida y código de estado 200 (OK)
    res.status(200).send('Bienvenido a la API');
});

// Ruta que fuerza un error para probar el middleware de manejo de errores
app.get('/error', (req, res, next) => {
    // Creamos un error y lo pasamos al siguiente middleware de manejo de errores
    next(new Error('Forzado error de prueba'));
});

// Middleware para el manejo de errores
app.use((err, req, res, next) => { // Es necesario 'next' como parámetro para detectar que es un middleware de manejo de errores
    // Registra el error utilizando el logger personalizado
    logger.error('Server Error: ' + err.message);
    // Responde con un código de error 500 y un mensaje JSON indicando error de servidor
    res.status(500).json({ error: 'Server Error' });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    // Mensaje de inicio del servidor, registrado con el logger personalizado
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
