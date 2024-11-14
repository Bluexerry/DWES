// Importa el módulo Router de Express para crear rutas modularizadas.
const { Router } = require('express');

// Importa el controlador de ping, que contiene la lógica de manejo para la ruta '/ping'.
const pingController = require('../controllers/pingController');

// Crea una nueva instancia del enrutador de Express.
const router = Router();

// Define la ruta '/api/ping' que maneja las solicitudes GET.
// Cuando se accede a '/api/ping', se llama al método 'ping' del controlador 'pingController'.
router.get('/', pingController.ping);

// Exporta el enrutador para que pueda ser utilizado en el archivo principal de la aplicación.
module.exports = router;
