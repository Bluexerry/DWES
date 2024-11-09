// Se requieren los módulos necesarios:
// 'express' para crear el servidor web,
// 'path' para manejar rutas de archivos y directorios.
const express = require('express');
const path = require('path');

// Se crea una instancia de la aplicación express
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// No es necesario definir __dirname, ya está disponible en CommonJS
// Ruta para "/ping" que responde con un mensaje JSON
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' }); // Enviar respuesta JSON con el mensaje 'pong'
});

// Ruta para la raíz ("/") que sirve el archivo 'index.html' cuando se accede a la raíz
app.get('/', (req, res) => {
    // Ajustamos la ruta para apuntar a 'Front/index.html'
    res.sendFile(path.join(__dirname, '..', 'Front', 'index.html'), (err) => {
        // Si ocurre un error al cargar el archivo, respondemos con un error 404
        if (err) {
            res.status(404).send('Error al cargar la página');
        }
    });
});

// Iniciar el servidor y hacer que escuche en el puerto definido (3000)
// Cuando el servidor esté en ejecución, se imprimirá un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

// Pruebas:
// http://localhost:3000/
// http://localhost:3000/ping
// curl http://localhost:3000
// curl http://localhost:3000/ping

// Respuesta esperada:
// El contenido del archivo 'index.html' ubicado en 'Front/index.html'.
// {"message":"pong"}