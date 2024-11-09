// Importamos el módulo 'express' para poder crear el servidor
const express = require('express');

// Creamos una instancia de Express, que será la aplicación del servidor
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Ruta /header para verificar la presencia de un token en los headers
app.get('/header', (req, res) => {
    // Obtenemos el token desde los headers de la solicitud, específicamente el valor de 'token'
    const token = req.headers['token'];

    // Verificamos si el token está presente
    if (token) {
        // Si el token está presente, lo mostramos en la consola
        console.log('Token recibido:', token);

        // Respondemos con un mensaje de éxito y un código de estado 200
        res.status(200).send('Token recibido correctamente');
    } else {
        // Si no se encuentra un token en los headers, respondemos con un error 401 (no autorizado)
        res.status(401).json({
            code: 401,  // Código de error
            error: 'Unauthorized',  // Tipo de error
            message: 'Error: Set a token to login'  // Mensaje explicando el error
        });
    }
});

// Iniciamos el servidor para que escuche en el puerto 3000
app.listen(PORT, () => {
    // Imprimimos en la consola un mensaje indicando que el servidor está funcionando
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//Pruebas:
//curl -H "token: 12345" http://localhost:3000/header
//http://localhost:3000/headers

//Respuestas:
//Token recibido correctamente
//{"code":401,"error":"Unauthorized","message":"Error: Set a token to login"}
