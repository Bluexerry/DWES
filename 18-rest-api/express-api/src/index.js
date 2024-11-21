// src/index.js
const app = require("./app");
const config = require("./config");

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//Pruebas:
// curl -X GET http://localhost:3000/users
// curl -X GET http://localhost:3000/users/1
// curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
// curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane@example.com"}'
// curl -X DELETE http://localhost:3000/users/1
// npm test
