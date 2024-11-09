// Importamos los módulos necesarios de Node.js: http, fs (sistema de archivos), path y fileURLToPath para manejar rutas de archivos.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

// Creamos el servidor HTTP.
const server = http.createServer((req, res) => {
    // Usamos un switch para manejar diferentes rutas.
    switch (req.url) {
        // Si la ruta es "/page", se lee y se envía el archivo 'index.html'.
        case "/page":
            // Establecemos el tipo de contenido como HTML y leemos el archivo 'index.html'.
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../Front/index.html'), 'utf-8', (err, data) => {
                if (err) {
                    // Si ocurre un error al leer el archivo, se responde con código 200 (pero con un mensaje de error).
                    res.statusCode = 200;
                    res.end('Error al cargar la página');
                    return;
                } else {
                    // Si el archivo se lee correctamente, enviamos su contenido como respuesta.
                    res.end(data);
                }
            });
            break;

        // Si la ruta es "/error", se responde con un mensaje de error 404.
        case "/error":
            res.statusCode = 404;
            res.end('Error 404: Página no encontrada');
            break;

        // Si la ruta es "/", se responde con un mensaje indicando cómo acceder a la página principal.
        case "/":
            res.writeHead(200);  // Responde con código 200 (OK)
            res.end('Para acceder a la página principal ingrese a http://localhost:3000/page');
            break;

        // Si la ruta no coincide con ninguna de las anteriores, no hace nada (esto puede ser mejorado para manejar rutas no definidas).
    }
})

// El servidor escucha en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});


// Pruebas:
// Página principal: http://localhost:3000/page
// Error 404: http://localhost:3000/error
// Mensaje de bienvenida: http://localhost:3000/