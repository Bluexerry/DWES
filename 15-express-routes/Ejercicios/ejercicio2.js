// Importamos el módulo 'express' para poder usarlo y crear el servidor
const express = require('express');

// Creamos una instancia de Express, que es la aplicación que manejará las rutas
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Ruta /params que recibe un parámetro llamado "name" en la URL
app.get('/params/:name', (req, res) => {
    // Extraemos el valor del parámetro "name" desde la URL
    const { name } = req.params;

    // Enviamos una respuesta con un saludo personalizado usando el parámetro "name"
    res.send(`Hola ${name}`);
});

// Iniciamos el servidor para que escuche en el puerto 3000
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola cuando el servidor esté en ejecución
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//Pruebas:
// curl http://localhost:3000/params/Juan
// http://localhost:3000/params/Juan

//Respuestas:
// Hola Juan
