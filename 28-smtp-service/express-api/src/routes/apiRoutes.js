// src/routes/apiRoutes.js

const express = require('express'); // Importa la biblioteca Express
const router = express.Router(); // Crea una instancia de router de Express
const apiService = require('../services/apiService'); // Importa el servicio apiService
const emailRoutes = require('./emailRoutes'); // Importa las rutas de email

// Define una ruta GET para '/user/:id'
router.get('/user/:id', async (req, res) => {
  const userId = req.params.id; // Obtiene el ID del usuario desde los parámetros de la URL
  try {
    const user = await apiService.getUser(userId); // Llama a la función getUser del servicio
    res.json(user); // Envía los datos del usuario como respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ mensaje: error.message }); // Envía una respuesta de error si falla la petición
  }
});

// Usa las rutas de email bajo el prefijo '/email'
router.use('/email', emailRoutes);

module.exports = router; // Exporta el router para ser usado en express.js