// Se importa el módulo 'express' para crear el servidor web.
const express = require('express');
// Se importa el módulo 'path' para manejar las rutas de archivos y directorios.
const path = require('path');

// Se crea una instancia de la aplicación express.
const app = express();
// Definimos el puerto en el que el servidor escuchará las solicitudes.
const PORT = 3000;

// Ruta para la raíz ("/") que sirve el archivo 'index.html' cuando se accede a la raíz.
app.get('/', (req, res) => {
    // Ajustamos la ruta para apuntar a 'Front/htmls/index.html'.
    res.sendFile(path.join(__dirname, '..', 'Front', 'index.html'), (err) => {
        // Si ocurre un error al cargar el archivo, respondemos con un mensaje de error.
        if (err) {
            // Respondemos con un error 404 si no se pudo cargar el archivo.
            res.status(404).send('Error al cargar la página');
        }
    });
});

// El servidor escucha en el puerto definido (3000).
// Cuando el servidor esté en ejecución, se imprime un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

// Pruebas:
// curl http://localhost:3000
// http://localhost:3000/

// Respuesta esperada:
// El contenido del archivo 'index.html' ubicado en 'Front/htmls/index.html'.
