const app = require('./app');
const logger = require('./loaders/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});

// Pruebas:
// node src/index.js
// npm start
// npm test
// npm run postman-test

// Crear nueva nota
// curl -X POST http://localhost:3000/api/notes -H "Content-Type: application/json" -d '{"name": "test", "content": "This is a test note"}'

// Obtener todas las notas
//curl http://localhost:3000/api/notes

// Obtener el contenido de una nota
// curl http://localhost:3000/api/notes/test

// Eliminar una nota
// curl -X DELETE http://localhost:3000/api/notes/test