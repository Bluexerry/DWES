// Importamos el módulo 'express' para poder usarlo y crear el servidor
const express = require('express');

// Creamos una instancia de Express, que es la aplicación que manejará las rutas
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Ruta /query que recibe un parámetro n de la query string y calcula la suma de los primeros n números
app.get('/query', (req, res) => {
    // Obtenemos el parámetro 'n' de la query string; si no se proporciona, se usa 100 por defecto
    const n = parseInt(req.query.n) || 100;

    // Calculamos la suma de los primeros 'n' números utilizando la fórmula de la suma de una serie aritmética
    const sum = (n * (n + 1)) / 2;

    // Enviamos la suma como respuesta
    res.send(`La suma de todos los números desde 1 hasta ${n} es: ${sum}`);
});

// Iniciamos el servidor para que escuche en el puerto 3000
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola cuando el servidor esté en ejecución
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//Pruebas:
//curl "http://localhost:3000/query?n=10"
//http://localhost:3000/query?n=10

//Respuestas:
//La suma de todos los números desde 1 hasta 10 es: 55