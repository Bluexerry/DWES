// index.js
const express = require('express'); // Importamos Express
const app = express();              // Creamos una instancia de Express
const PORT = 3000;                  // Puerto donde correrá el servidor

// Ruta /query que calcula la suma de todos los números desde 1 hasta n
app.get('/query', (req, res) => {
    // Obtenemos el parámetro n de la query; si no está definido, tomamos 100 por defecto
    const n = parseInt(req.query.n) || 100;

    // Calculamos la suma desde 1 hasta n usando la fórmula de la suma de una serie aritmética
    const sum = (n * (n + 1)) / 2;

    // Enviamos la suma como respuesta
    res.send(`La suma de todos los números desde 1 hasta ${n} es: ${sum}`);
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
