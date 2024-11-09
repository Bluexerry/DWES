// Se requieren los módulos necesarios:
// 'express' para crear el servidor web,
// 'path' para manejar rutas de archivos y directorios.
const express = require('express');
const path = require('path');

// Se crea una instancia de la aplicación express
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Ruta para "/page" que sirve el archivo 'index.html' cuando se accede a '/page'
app.get('/page', (req, res) => {
    // Ajustamos la ruta para apuntar a 'Front/index.html'
    res.sendFile(path.join(__dirname, '..', 'Front', 'index.html'), (err) => {
        // Si ocurre un error al intentar cargar el archivo, respondemos con un mensaje de error
        if (err) {
            res.status(200).send('Error al cargar la página');
        }
    });
});

// Ruta para "/error" que responde con un mensaje de error 404
app.get('/error', (req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
});

// Ruta para la raíz ("/") que envía un mensaje con una indicación de acceso
app.get('/', (req, res) => {
    // Proporciona un mensaje indicando que la página principal está disponible en '/page'
    res.send('Para acceder a la página principal ingrese a http://localhost:3000/page');
});

// Iniciar el servidor y hacer que escuche en el puerto definido (3000)
// Cuando el servidor esté en ejecución, se imprimirá un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

// Pruebas:
// http://localhost:3000/
// http://localhost:3000/page
// http://localhost:3000/error
// curl http://localhost:3000
// curl http://localhost:3000/page
// curl http://localhost:3000/error