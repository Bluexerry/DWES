// Importa 'supertest' para realizar solicitudes HTTP simuladas en la aplicación.
const request = require('supertest');

// Importa la aplicación Express configurada desde el archivo 'app.js'.
const app = require('../../src/app');

// Define una prueba unitaria usando Jest para verificar que la ruta GET /fibonacci/:number devuelve el número de Fibonacci correcto.
test('GET /fibonacci/:number - should return Fibonacci number', async () => {
    // Realiza una solicitud GET a la ruta '/fibonacci/5' usando 'supertest'.
    const response = await request(app).get('/fibonacci/5');
    
    // Verifica que la respuesta tenga un código de estado 200, lo que indica que la solicitud fue exitosa.
    expect(response.status).toBe(200);
    
    // Verifica que el valor del resultado en el cuerpo de la respuesta sea igual a 5, que es el número de Fibonacci de 5.
    expect(response.body.result).toBe(5);
});
