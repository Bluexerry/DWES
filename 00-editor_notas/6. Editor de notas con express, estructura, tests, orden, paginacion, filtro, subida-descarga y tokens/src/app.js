const express = require('express');
const notesRoutes = require('./routes/notesRoutes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(express.json());

// Montar todas las rutas de notas bajo '/api/notes'
app.use('/api/notes', notesRoutes);

// Middleware para manejo de errores
app.use(errorHandler);

module.exports = app;