// server2.js
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/page":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../Front/index.html'), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 200;
                    res.end('Error al cargar la página');
                    return;
                } else {
                    res.end(data);
                }
            });
            break;
        case "/error":
            res.statusCode = 404;
            res.end('Error 404: Pagina no encontrada');
            break;
        case "/":
            res.writeHead(200);
            res.end('Para acceder a la pagina principal ingrese a http://localhost:3000/page');
            break;
    }
})

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});
