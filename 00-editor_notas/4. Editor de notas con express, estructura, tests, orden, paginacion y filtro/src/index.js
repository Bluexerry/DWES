// src/index.js

const app = require('./app');
const logger = require('./loaders/logger');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Ruta absoluta del directorio de notas
const notesDir = path.join(__dirname, '../notas');

// Crear el directorio 'notas' si no existe, con opción 'recursive'
if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
    logger.info(`Directorio 'notas' creado en ${notesDir}`);
} else {
    logger.info(`Directorio 'notas' ya existe en ${notesDir}`);
}

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
// curl http://localhost:3000/api/notes/note6

// Actualizar una nota
// curl -X PUT http://localhost:3000/api/notes -H "Content-Type: application/json" -d '{"name": "test", "content": "Este es el nuevo contenido de la nota"}'

// Eliminar una nota
// curl -X DELETE http://localhost:3000/api/notes/note7

// Menu
// npm run menu
// npm run crear
// npm run editar
// npm run eliminar

// Paginado - Primeras 5 notas
// curl "http://localhost:3000/api/notes?offset=0&limit=5"
// Siguientes 5 notas
// curl "http://localhost:3000/api/notes?offset=5&limit=5"
// Últimas 5 notas
// curl "http://localhost:3000/api/notes?offset=10&limit=5"

// Fltro - Obtener "note1"
// curl "http://localhost:3000/api/notes?filter=note1"
// Obtener "project"
// curl "http://localhost:3000/api/notes?filter=project"

// Orden - Ascendente
// curl "http://localhost:3000/api/notes?sort=name"
// Descendente
// curl "http://localhost:3000/api/notes?sort=-createdAt"