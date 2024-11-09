// Se importa el módulo 'express' para crear la aplicación web
const express = require('express');

// Se crea una instancia de la aplicación express
const app = express();

// Se define el puerto en el que el servidor escuchará las solicitudes
const PORT = 4000;

// Configuración de la ruta raíz ("/") para que responda con 'Hello World!'
app.get('/', (req, res) => {
    res.send('Hello World!\n'); // Envía una respuesta con el texto 'Hello World!'
});

// El servidor se pone a escuchar en el puerto definido (4000) y cuando el servidor
// esté listo, se imprimirá un mensaje en la consola indicando que está en ejecución.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//Pruebas:
// curl http://localhost:4000
// http://localhost:4000

//Respuesta esperada:
// Hello World!
