import http from 'http';
import url from 'node:url';

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if (req.url.startsWith('/hello')) {
        const name = queryObject.name || 'World';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello ${name}!`);

    } else if (req.url.startsWith('/fizzbuzz')) {
        const number = parseInt(queryObject.number, 10);

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
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result.join(', '));
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Por favor, proporciona un número válido en el query string, por ejemplo: ?number=15');
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

//http://localhost:3000/fizzbuzz?number=15