// server3.js
import express from 'express';

const app = express();
const PORT = 3000;

// Ruta para "/hello"
app.get('/hello', (req, res) => {
    // Obtener el parámetro "name" de la consulta
    const name = req.query.name || 'World'; // Por defecto "World" si no se pasa "name"
    res.status(200).send(`Hello ${name}!`);
});

// Manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});


//http://localhost:3000/hello?name=YourName
//http://localhost:3000/hello?name=que%20dice%20pixa