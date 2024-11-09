// Importamos los módulos necesarios de Node.js: http, fs (sistema de archivos), path y fileURLToPath para manejar rutas de archivos.
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

// Creamos el servidor HTTP que manejará las solicitudes.
const server = http.createServer((req, res) => {
    // Establecemos el encabezado 'Content-Type' de la respuesta como 'application/json', aunque luego usaremos 'text/html' en las respuestas.
    res.setHeader("Content-Type", "application/json");

    // Usamos un switch para manejar diferentes rutas.
    switch (req.url) {
        // Si la ruta es "/ping", responderemos con el archivo 'about.html'.
        case "/page":
            // Establecemos el tipo de contenido como HTML y leemos el archivo 'about.html'.
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../Front/about.html'), 'utf-8', (err, data) => {
                if (err) {
                    // Si hay un error al leer el archivo, respondemos con un código 404 y un mensaje de error.
                    res.statusCode = 404;
                    res.end('Error al cargar la página');
                    return;
                } else {
                    // Si no hay error, enviamos el contenido del archivo.
                    res.end(data);
                }
            });
            break;
        // Si la ruta es "/", responderemos con el archivo 'index.html'.
        case "/":
            // Establecemos el tipo de contenido como HTML y leemos el archivo 'index.html'.
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../Front/index.html'), 'utf-8', (err, data) => {
                if (err) {
                    // Si hay un error al leer el archivo, respondemos con un código 404 y un mensaje de error.
                    res.statusCode = 404;
                    res.end('Error al cargar la página');
                    return;
                } else {
                    // Si no hay error, enviamos el contenido del archivo.
                    res.end(data);
                }
            });
            break;
        default:
            // Si la ruta no es "/ping" ni "/", respondemos con un mensaje de error o una página no encontrada.
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Ruta no encontrada" }));
            break;
    }
});

// El servidor escucha en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});

// Pruebas:
// http://localhost:3000/ (debería mostrar el contenido de 'index.html')
// http://localhost:3000/page (debería mostrar el contenido de 'about.html')
// http://localhost:3000/otra-cosa (debería mostrar un mensaje de error)