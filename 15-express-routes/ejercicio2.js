// index.js
const express = require('express'); // Importamos Express
const app = express();              // Creamos una instancia de Express
const PORT = 3000;                  // Puerto donde correrá el servidor

// Ruta /params con un parámetro llamado "name"
app.get('/params/:name', (req, res) => {
    const { name } = req.params;      // Extraemos el parámetro "name" de la URL
    res.send(`Hola ${name}`);         // Enviamos la respuesta con el saludo personalizado
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
