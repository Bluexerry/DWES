// server2.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 3000;

// Obtener el directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ruta para "/page"
app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front/index.html'), (err) => {
        if (err) {
            res.status(200).send('Error al cargar la página');
        }
    });
});

// Ruta para "/error"
app.get('/error', (req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
});

// Ruta para "/"
app.get('/', (req, res) => {
    res.send('Para acceder a la página principal ingrese a http://localhost:3000/page');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
