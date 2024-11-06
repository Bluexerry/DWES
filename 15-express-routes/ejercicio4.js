// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta /body que muestra los parámetros del cuerpo en una lista HTML o desde query params
app.get('/body', (req, res) => {
    const params = req.query; // Obtiene los parámetros de la consulta (query params)

    // Generamos una lista HTML con cada clave y valor del objeto
    let htmlList = '<ul>';
    for (const key in params) {
        htmlList += `<li><strong>${key}</strong>: ${params[key]}</li>`;
    }
    htmlList += '</ul>';

    // Enviamos la lista HTML como respuesta
    res.send(htmlList);
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
