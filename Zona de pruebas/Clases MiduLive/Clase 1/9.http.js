const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Petición entrante...')
  res.end('Hola Mundo')
})

server.listen(0, () => {
  console.log(`Servidor escuchando en http://localhost:${server.address().port}`) // Definienfo el puerto 0 se asigna un puerto aleatorio, el cual siempre esta libre y disponible
})
