/* eslint-env jest */
// Esta línea indica a ESLint que el entorno de pruebas es Jest, lo que permite que ESLint conozca las funciones globales como 'describe', 'it', 'expect', etc.

const request = require('supertest');  // Importa la librería 'supertest' para realizar peticiones HTTP en las pruebas.
const app = require('../../src/app');  // Importa la aplicación Express desde el archivo 'app.js'.

// Describe el conjunto de pruebas para la ruta GET '/api/ping'.
describe('GET /api/ping', () => {

    // Define una prueba individual que verifica la respuesta del servidor a una solicitud GET.
    it('should respond with pong', async () => {

        // Realiza una solicitud GET a la ruta '/api/ping' utilizando 'supertest'.
        const response = await request(app).get('/api/ping');

        // Verifica que la respuesta tenga un estado HTTP 200, indicando que la solicitud fue exitosa.
        expect(response.status).toBe(200);

        // Verifica que el cuerpo de la respuesta sea exactamente 'pong'.
        expect(response.text).toBe('pong');
    });
});
