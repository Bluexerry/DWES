// index.js
const express = require('express');  // Importamos Express
const app = express();               // Creamos una instancia de Express
const PORT = 3000;                   // Puerto donde correrá el servidor

// Ruta /header
app.get('/header', (req, res) => {
    const token = req.headers['token'];  // Obtenemos el token desde los headers

    // Verificamos si el token está definido
    if (token) {
        console.log('Token recibido:', token);  // Imprimimos el token en la consola
        res.status(200).send('Token recibido correctamente');
    } else {
        // Si el token no está definido, devolvemos un error 401
        res.status(401).json({
            code: 401,
            error: 'Unauthorized',
            message: 'Error: Set a token to login'
        });
    }
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
