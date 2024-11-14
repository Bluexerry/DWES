// Requiere el módulo 'logger' que se encuentra en la carpeta 'utils', para registrar logs de información y advertencias.
const logger = require('../utils/logger');

// Define la función 'calculateFibonacci' que será utilizada para manejar solicitudes HTTP relacionadas con el cálculo de Fibonacci.
function calculateFibonacci(req, res) {
    // Obtiene el parámetro 'number' de la URL, lo convierte a número entero usando 'parseInt'.
    const number = parseInt(req.params.number, 10);

    // Comprueba si el parámetro 'number' no es un número válido o si es menor que 0.
    if (isNaN(number) || number < 0) {
        // Si el número no es válido, se registra una advertencia en el log y se responde con un error 400.
        logger.warn(`Número inválido: ${req.params.number}`);
        return res.status(400).send({ error: 'Invalid number' });
    }

    // Define la función recursiva para calcular el número Fibonacci. La función se detiene cuando 'n' es 0 o 1.
    const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

    // Llama a la función 'fibonacci' para obtener el resultado correspondiente al número dado.
    const result = fibonacci(number);

    // Registra en el log el resultado calculado para ese número Fibonacci.
    logger.info(`Fibonacci de ${number} es ${result}`);

    // Devuelve el resultado al cliente como una respuesta JSON.
    res.send({ result });
}

// Exporta la función para que pueda ser utilizada en otras partes de la aplicación.
module.exports = { calculateFibonacci };
