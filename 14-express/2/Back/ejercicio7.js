// server4.js
import express from 'express';

const app = express();
const PORT = 3000;

// Ruta para "/hello"
app.get('/hello', (req, res) => {
    const name = req.query.name || 'World'; // Por defecto "World" si no se pasa "name"
    res.status(200).send(`Hello ${name}!`);
});

// Ruta para "/fizzbuzz"
app.get('/fizzbuzz', (req, res) => {
    const number = parseInt(req.query.number, 10);

    if (!isNaN(number)) {
        let result = [];
        for (let i = 1; i <= number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push('FizzBuzz');
            } else if (i % 3 === 0) {
                result.push('Fizz');
            } else if (i % 5 === 0) {
                result.push('Buzz');
            } else {
                result.push(i.toString());
            }
        }
        res.status(200).send(result.join(', '));
    } else {
        res.status(400).send('Por favor, proporciona un número válido en el query string, por ejemplo: ?number=15');
    }
});

// Manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
