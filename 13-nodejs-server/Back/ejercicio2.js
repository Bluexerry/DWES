// Importamos los módulos necesarios de Node.js: http, fs (sistema de archivos), path y fileURLToPath para manejar rutas de archivos.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

// Creamos el servidor HTTP.
const server = http.createServer((req, res) => {
    // Establecemos la cabecera de la respuesta indicando que el contenido será de tipo HTML.
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Leemos el archivo 'index.html' desde la carpeta 'Front' (que está en un directorio superior al del script).
    fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../Front/index.html'), 'utf-8', (err, data) => {
        if (err) {
            // Si ocurre un error (por ejemplo, el archivo no se encuentra), respondemos con un código de estado 404 y un mensaje de error.
            res.statusCode = 404;
            res.end('Error al cargar la página');
            return;
        } else {
            // Si todo está bien, enviamos el contenido de 'index.html' como respuesta.
            res.end(data);
        }
    });
});

// El servidor escucha las solicitudes en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});

// Pruebas:
// http://localhost:3000/ (debería mostrar el contenido de 'index.html')

