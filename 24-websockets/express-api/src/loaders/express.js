const express = require('express');
const routes = require('../routes/index');

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Rutas de la API
  app.use('/api', routes);

  // Servir archivos estáticos desde la carpeta 'public'
  app.use(express.static('public'));

  // Manejar rutas desconocidas
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  });

  // Manejar errores
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error del servidor' });
  });
};