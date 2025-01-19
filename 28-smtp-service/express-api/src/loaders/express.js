// src/loaders/express.js

const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('../routes/apiRoutes');

module.exports = () => {
  const app = express();

  // Middleware para parsear JSON
  app.use(bodyParser.json());

  // Rutas de la API
  app.use('/api', apiRoutes);

  // Ruta raíz
  app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Usuarios');
  });

  // Manejo de errores 404
  app.use((req, res, next) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
  });

  return app;
};