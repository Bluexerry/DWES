// Requiere el Router de Express, que permite definir rutas específicas.
const { Router } = require('express');

// Requiere la función 'calculateFibonacci' desde el controlador 'fibonacciController'.
const { calculateFibonacci } = require('../controllers/fibonacciController');

// Crea una nueva instancia de Router, que gestionará las rutas específicas de Fibonacci.
const router = Router();

// Define una ruta HTTP GET que recibe un parámetro 'number' en la URL y llama a la función 'calculateFibonacci' para manejar la solicitud.
router.get('/:number', calculateFibonacci);

// Exporta el router para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;
