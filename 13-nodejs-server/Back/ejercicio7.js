// Importamos los módulos necesarios de Node.js: http para crear el servidor y url para trabajar con la URL y los parámetros del query string.
import http from 'http';
import url from 'node:url';

// Creamos el servidor HTTP.
const server = http.createServer((req, res) => {
    // Parseamos la URL de la solicitud para obtener los parámetros del query string.
    const queryObject = url.parse(req.url, true).query;

    // Si la URL comienza con '/hello', mostramos un saludo con el parámetro 'name' del query string.
    if (req.url.startsWith('/hello')) {
        // Si no se proporciona el parámetro 'name', se usa "World" por defecto.
        const name = queryObject.name || 'World';
        // Establecemos el encabezado de la respuesta y enviamos el mensaje de saludo.
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${name}!`);

        // Si la URL comienza con '/fizzbuzz', ejecutamos la lógica de FizzBuzz.
    } else if (req.url.startsWith('/fizzbuzz')) {
        // Parseamos el parámetro 'number' del query string como un número entero.
        const number = parseInt(queryObject.number, 10);

        // Verificamos si el parámetro 'number' es un número válido.
        if (!isNaN(number)) {
            let result = [];
            // Realizamos el cálculo de FizzBuzz hasta el número proporcionado.
            for (let i = 1; i <= number; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result.push('FizzBuzz');  // Si es múltiplo de 3 y 5, agregamos "FizzBuzz".
                } else if (i % 3 === 0) {
                    result.push('Fizz');  // Si es múltiplo de 3, agregamos "Fizz".
                } else if (i % 5 === 0) {
                    result.push('Buzz');  // Si es múltiplo de 5, agregamos "Buzz".
                } else {
                    result.push(i.toString());  // Si no es múltiplo de 3 ni 5, agregamos el número.
                }
            }
            // Enviamos la respuesta con los resultados de FizzBuzz, separados por comas.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result.join(', '));
        } else {
            // Si el parámetro 'number' no es válido, respondemos con un error 400.
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Por favor, proporciona un número válido en el query string, por ejemplo: ?number=15');
        }

        // Si la URL no corresponde a ninguna de las rutas anteriores, respondemos con un error 404.
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// El servidor escucha en el puerto 3000.
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/');
});

// Pruebas:
// http://localhost:3000/hello
// http://localhost:3000/hello?name=John
// http://localhost:3000/hello?name=Jane
// http://localhost:3000/fizzbuzz?number=15
// http://localhost:3000/fizzbuzz?number=20
