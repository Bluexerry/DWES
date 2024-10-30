import http from 'http';
import url from 'node:url';

const server = http.createServer((req, res) => {
    // Parseamos la URL para obtener los parámetros del query string
    const queryObject = url.parse(req.url, true).query;

    if (req.url.startsWith('/hello')) {
        const name = queryObject.name || 'World'; // Por defecto "World" si name no se pasa
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${name}!`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

//http://localhost:3000/hello?name=Jesús