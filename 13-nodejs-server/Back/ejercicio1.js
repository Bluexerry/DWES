const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello World!\n');
    res.end();

});

server.listen(4000);