const express = require('express');
const app = express();
const port = 3000;

// Ruta GET básica
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Ruta POST en la raíz
app.post('/', (req, res) => {
    res.send('Received a POST request');
});

// Ruta PUT en /user
app.put('/user', (req, res) => {
    res.send('Received a PUT request at /user');
});

// Ruta DELETE en /user
app.delete('/user', (req, res) => {
    res.send('Received a DELETE request at /user');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Servicio de archivos estáticos en la carpeta "public"
app.use(express.static('public'));
