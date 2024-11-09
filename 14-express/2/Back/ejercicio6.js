// Se importa el módulo 'express' para crear el servidor web.
const express = require('express');

// Se crea una instancia de la aplicación express.
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes.
const PORT = 3000;

// Ruta para "/hello" que responde con un saludo basado en un parámetro de consulta.
app.get('/hello', (req, res) => {
    // Obtener el parámetro "name" de la consulta (query string).
    // Si no se proporciona un valor para "name", se usa 'World' por defecto.
    const name = req.query.name || 'World';
    // Se envía una respuesta con el saludo al usuario.
    res.status(200).send(`Hello ${name}!`);
});

// Manejar rutas no encontradas.
// Si se hace una solicitud a una ruta que no está definida en el servidor,
// se responde con un error 404 y el mensaje "Not Found".
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Iniciar el servidor y hacer que escuche en el puerto definido (3000).
// Cuando el servidor esté en ejecución, se imprime un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

// Pruebas:
// http://localhost:3000/hello
// http://localhost:3000/hello?name=John