const express = require('express');
const app = express();
const PORT = 4000;

// Configuración de la ruta raíz para que responda con 'Hello World!'
app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

// El servidor se pone a escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
