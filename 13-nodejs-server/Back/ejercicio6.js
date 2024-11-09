// Importamos los módulos 'http' y 'url' de Node.js.
import http from 'http';
import url from 'node:url';

// Creamos un servidor HTTP que escucha las peticiones.
const server = http.createServer((req, res) => {
    // Parseamos la URL de la solicitud para obtener los parámetros del query string.
    const queryObject = url.parse(req.url, true).query;

    // Comprobamos si la URL solicitada empieza con '/hello'.
    if (req.url.startsWith('/hello')) {
        // Si se pasa un parámetro 'name' en la URL, lo obtenemos, si no, usamos 'World' por defecto.
        const name = queryObject.name || 'World'; // Si no se pasa 'name', el valor predeterminado es 'World'.

        // Establecemos una respuesta con código 200 (OK) y el tipo de contenido como texto plano.
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Enviamos la respuesta con el mensaje 'Hello <name>!'.
        res.end(`Hello ${name}!`);
    } else {
        // Si la URL no empieza con '/hello', respondemos con un error 404 (Not Found).
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Hacemos que el servidor escuche en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/');
});

// Pruebas:
// http://localhost:3000/hello
// http://localhost:3000/hello?name=John
// http://localhost:3000/hello?name=Jane
