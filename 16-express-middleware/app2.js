const express = require('express');
const app = express();

// Middleware de autenticación para acceso restringido
function authMiddleware(req, res, next) {
    // Obtenemos el valor del parámetro 'password' de las cabeceras
    const password = req.headers['password'];

    // Validamos que el valor del parámetro 'password' sea 'patata'
    if (password === 'patata') {
        // Si es correcto, pasamos al siguiente middleware o ruta
        return next();
    } else {
        // Si no es correcto o no está presente, devolvemos un error 401
        return res.status(401).json({
            error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
        });
    }
}

// Ruta pública (sin protección)
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API pública');
});

// Ruta protegida (requiere autenticación)
app.get('/admin', authMiddleware, (req, res) => {
    // Si el middleware pasa, respondemos con el mensaje de acceso correcto
    res.status(200).send('Bienvenid@, disfrute del contenido');
});

// Ruta para forzar un error de autenticación
app.get('/access-denied', (req, res) => {
    res.status(401).json({
        error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición"
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
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