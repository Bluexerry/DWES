// Importa la función 'calculateFibonacci' desde el controlador 'fibonacciController'.
const { calculateFibonacci } = require('../../src/controllers/fibonacciController');

// Importa 'node-mocks-http' para crear objetos de solicitud (req) y respuesta (res) simulados para las pruebas.
const httpMocks = require('node-mocks-http');

// Define una prueba unitaria usando Jest para verificar que la función 'calculateFibonacci' devuelve el número de Fibonacci correcto.
test('calculateFibonacci returns correct Fibonacci number', () => {
    // Crea una solicitud simulada con el parámetro 'number' igual a '5'. Este es el valor que se pasará a la función de Fibonacci.
    const req = httpMocks.createRequest({ params: { number: '5' } });
    
    // Crea una respuesta simulada para capturar lo que se devuelve por la función 'calculateFibonacci'.
    const res = httpMocks.createResponse();

    // Llama a la función 'calculateFibonacci' con las solicitudes y respuestas simuladas.
    calculateFibonacci(req, res);
    
    // Verifica que los datos de la respuesta sean correctos. Se espera que el resultado sea { result: 5 }.
    expect(res._getData()).toEqual({ result: 5 });
});
