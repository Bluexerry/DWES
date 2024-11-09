// Se importa el módulo 'express' para crear la aplicación web
const express = require('express');

// Se crea una instancia de la aplicación express
const app = express();

// Se define el puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Ruta GET básica que responde con "Hello World!" cuando se accede a la raíz "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta POST que responde con un mensaje cuando se realiza una solicitud POST a la raíz "/"
app.post('/', (req, res) => {
    res.send('Received a POST request');
});

// Ruta PUT que responde con un mensaje cuando se realiza una solicitud PUT a "/user"
app.put('/user', (req, res) => {
    res.send('Received a PUT request at /user');
});

// Ruta DELETE que responde con un mensaje cuando se realiza una solicitud DELETE a "/user"
app.delete('/user', (req, res) => {
    res.send('Received a DELETE request at /user');
});

// Inicia el servidor y lo configura para escuchar en el puerto definido (3000)
// Imprime en la consola un mensaje indicando que el servidor está activo
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Configura el servidor para servir archivos estáticos (por ejemplo, imágenes, HTML, CSS) desde la carpeta "public"
app.use(express.static('public'));

//Pruebas:
//curl http://localhost:3000/
//curl -X POST http://localhost:3000/
//curl -X PUT http://localhost:3000/user
//curl -X DELETE http://localhost:3000/user
//curl http://localhost:3000/images/cat.jpg
//curl http://localhost:3000/index.html
// http://localhost:3000/index.html