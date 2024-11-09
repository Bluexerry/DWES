// Se requiere el módulo 'express' para crear el servidor web.
const express = require('express');

// Se crea una instancia de la aplicación express.
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes.
const PORT = 3000;

// Ruta para "/fizzbuzz" que genera una secuencia de FizzBuzz hasta el número proporcionado.
app.get('/fizzbuzz', (req, res) => {
    // Convertir el valor del parámetro "number" a un entero.
    const number = parseInt(req.query.number, 10);

    // Verificamos si el número proporcionado es válido.
    if (!isNaN(number)) {
        let result = []; // Array para almacenar los resultados de FizzBuzz.

        // Generamos la secuencia de FizzBuzz hasta el número proporcionado.
        for (let i = 1; i <= number; i++) {
            // Si el número es divisible por 3 y 5, se agrega 'FizzBuzz'
            if (i % 3 === 0 && i % 5 === 0) {
                result.push('FizzBuzz');
            }
            // Si es divisible solo por 3, se agrega 'Fizz'
            else if (i % 3 === 0) {
                result.push('Fizz');
            }
            // Si es divisible solo por 5, se agrega 'Buzz'
            else if (i % 5 === 0) {
                result.push('Buzz');
            }
            // Si no es divisible por 3 ni 5, se agrega el número como tal
            else {
                result.push(i.toString());
            }
        }
        // Enviar la secuencia resultante como respuesta, separada por comas.
        res.status(200).send(result.join(', '));
    } else {
        // Si el número no es válido, respondemos con un error 400.
        res.status(400).send('Por favor, proporciona un número válido en el query string, por ejemplo: ?number=15');
    }
});

// Manejar rutas no encontradas.
// Si se hace una solicitud a una ruta no definida en el servidor,
// se responde con un error 404 y el mensaje "Not Found".
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Iniciar el servidor y hacer que escuche en el puerto definido (3000).
// Cuando el servidor esté en ejecución, se imprime un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});

// Pruebas:
// http://localhost:3000/fizzbuzz?number=15
// http://localhost:3000/fizzbuzz?number=30
