// Importamos el módulo 'express' para poder usarlo y crear el servidor
const express = require('express');

// Creamos una instancia de Express, que es la aplicación que manejará las rutas
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Creamos un enrutador para manejar las rutas de /animals
const animalsRouter = express.Router();

// Ruta /animals/dog: Responde con un mensaje en formato JSON que representa el sonido de un perro
animalsRouter.get('/dog', (req, res) => {
    // Respuesta JSON para el perro
    res.json({ grow: "guau guau" });
});

// Ruta /animals/cat: Responde con un mensaje en formato JSON que representa el sonido de un gato
animalsRouter.get('/cat', (req, res) => {
    // Respuesta JSON para el gato
    res.json({ grow: "miau" });
});

// Ruta /animals/bird: Responde con un mensaje en formato JSON que representa el sonido de un pájaro
animalsRouter.get('/bird', (req, res) => {
    // Respuesta JSON para el pájaro
    res.json({ grow: "pio pio" });
});

// Usamos el enrutador bajo la ruta base '/animals' para que las rutas de /dog, /cat y /bird sean accesibles
app.use('/animals', animalsRouter);

// Iniciamos el servidor para que escuche en el puerto 3000
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola cuando el servidor esté en ejecución
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//Pruebas:
//curl "http://localhost:3000/animals/dog"
//http://localhost:3000/animals/dog
//curl "http://localhost:3000/animals/cat"
//http://localhost:3000/animals/cat
//curl "http://localhost:3000/animals/bird"
//http://localhost:3000/animals/bird

//Respuestas:
//{"grow":"guau guau"}
//{"grow":"miau"}
//{"grow":"pio pio"}