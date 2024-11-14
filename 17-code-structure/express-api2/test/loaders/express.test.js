// Importa el cargador de Express desde el archivo 'express' en la carpeta 'loaders'.
const expressLoader = require('../../src/loaders/express');

// Importa Express para crear una instancia de la aplicación.
const express = require('express');

// Importa 'supertest', una librería para hacer pruebas de integración de aplicaciones Express.
const request = require('supertest');

// Define una prueba unitaria usando Jest para verificar si las rutas están configuradas correctamente en Express.
test('expressLoader should set up routes correctly', async () => {
    // Crea una nueva instancia de la aplicación Express.
    const app = express();
    
    // Llama al cargador de Express para configurar las rutas y la lógica de la aplicación.
    expressLoader(app);

    // Realiza una solicitud GET a la ruta '/fibonacci/5' usando 'supertest'.
    const response = await request(app).get('/fibonacci/5');
    
    // Verifica que la respuesta no tenga un código de estado 404, lo que indicaría que la ruta no está configurada.
    expect(response.status).not.toBe(404); // Verifica que la ruta no devuelva 404
});
