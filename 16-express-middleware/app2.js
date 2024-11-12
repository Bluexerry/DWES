// Importamos el módulo Express para crear el servidor
const express = require('express');
const logger = require('./logger');
// Creamos una instancia de la aplicación Express
const app = express();

// Middleware de autenticación para rutas de acceso restringido
function authMiddleware(req, res, next) {
    // Obtenemos el valor del parámetro 'password' de las cabeceras de la petición
    const password = req.headers['password'];

    // Validamos que el valor de 'password' sea igual a 'patata'
    if (password === 'patata') {
        // Si la autenticación es exitosa, llamamos a next() para pasar al siguiente middleware o ruta
        return next();
    } else {
        // Si la autenticación falla, devolvemos un error 401 (No autorizado)
        return res.status(401).json({
            error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
        });
    }
}

// Ruta pública sin protección, accesible sin autenticación
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API pública'); // Mensaje de bienvenida a la API pública
});

// Ruta protegida que requiere autenticación
app.get('/admin', authMiddleware, (req, res) => {
    // Si authMiddleware pasa la autenticación, enviamos el mensaje de acceso autorizado
    res.status(200).send('Bienvenid@, disfrute del contenido');
});

// Ruta para simular un error de autenticación de manera explícita
app.get('/access-denied', (req, res) => {
    // Responde con un error 401 y un mensaje de acceso restringido
    res.status(401).json({
        error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
    });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    // Mensaje en consola indicando que el servidor está en ejecución
    logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});

// Pruebas:

/* Acceso con parametros:
 curl -H "password: patata" http://localhost:3000/admin
*/

/* Acceso sin parametros:
 curl http://localhost:3000/admin
*/

/* Acceso con un valor incorrecto:
curl -H "password: incorrecta" http://localhost:3000/admin
 */