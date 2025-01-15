const express = require('express'); // Importa la biblioteca Express
const router = express.Router(); // Crea una instancia de router de Express
const apiService = require('../services/apiService'); // Importa el servicio apiService para consumir la API externa

// Define una ruta GET para '/user/:id'
router.get('/user/:id', async (req, res) => {
  const userId = req.params.id; // Obtiene el ID del usuario desde los parámetros de la URL
  try {
    const user = await apiService.getUser(userId); // Llama a la función getUser del servicio para obtener los datos del usuario
    res.json(user); // Envía los datos del usuario como respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ mensaje: error.message }); // Si ocurre un error, envía una respuesta de error con el mensaje correspondiente
  }
});

module.exports = router; // Exporta el router para ser usado en app.js