// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = 3000;

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta para "/ping"
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' }); // Enviar respuesta JSON
});

// Ruta para "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Front', 'index.html'), (err) => {
        if (err) {
            res.status(404).send('Error al cargar la página');
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
