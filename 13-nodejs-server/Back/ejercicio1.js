// Importamos el módulo 'http' de Node.js.
import http from 'http';

// Creamos un servidor HTTP que maneja las solicitudes entrantes.
const server = http.createServer((req, res) => {
    // Escribimos un mensaje 'Hello World!' en la respuesta.
    res.write('Hello World!\n');

    // Finalizamos la respuesta y la enviamos al cliente.
    res.end();
});

// Hacemos que el servidor escuche en el puerto 4000.
server.listen(4000, () => {
    console.log('Servidor escuchando en http://localhost:4000/');
});

// Pruebas:
// http://localhost:4000
// http://localhost:4000/otra-ruta
