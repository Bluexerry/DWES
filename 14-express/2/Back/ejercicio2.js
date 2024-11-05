import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Para resolver la ruta del archivo index.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sirve el archivo index.html cuando accedemos a la raíz
app.get('/', (req, res) => {
    // Ajustamos la ruta para apuntar a 'Front/htmls/index.html'
    res.sendFile(path.join(__dirname, '..', 'Front', 'index.html'), (err) => {
        if (err) {
            res.status(404).send('Error al cargar la página');
        }
    });
});

// El servidor escucha en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
