// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Creamos un enrutador para las rutas de /animals
const animalsRouter = express.Router();

// Ruta /animals/dog
animalsRouter.get('/dog', (req, res) => {
    res.json({ grow: "guau guau" }); // Respuesta JSON para el perro
});

// Ruta /animals/cat
animalsRouter.get('/cat', (req, res) => {
    res.json({ grow: "miau" }); // Respuesta JSON para el gato
});

// Ruta /animals/bird
animalsRouter.get('/bird', (req, res) => {
    res.json({ grow: "pio pio" }); // Respuesta JSON para el pájaro
});

// Usamos el enrutador bajo la ruta /animals
app.use('/animals', animalsRouter);

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
