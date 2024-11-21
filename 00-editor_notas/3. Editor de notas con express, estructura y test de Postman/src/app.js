const express = require('express');
const notesRoutes = require('./routes/notesRoutes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(express.json());
app.use('/api/notes', notesRoutes);
app.use(errorHandler);

module.exports = app;