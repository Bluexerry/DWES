const express = require('express'); // Importa la biblioteca Express
const apiRoutes = require('./routes/apiRoutes'); // Importa las rutas de la API desde apiRoutes.js

const app = express(); // Crea una instancia de la aplicación Express

app.use(express.json()); // Middleware para parsear cuerpos de solicitudes JSON

app.use('/api', apiRoutes); // Utiliza las rutas definidas en apiRoutes.js bajo el prefijo '/api'

app.get('/', (req, res) => { // Define una ruta GET para la raíz del servidor
  res.send('Bienvenido a la API externa'); // Envía una respuesta de bienvenida al cliente
});

module.exports = app; // Exporta la instancia de la aplicación para ser usada en otros archivos