// app.js
const express = require("express");
const loadRoutes = require("./loaders/routes");

const app = express();

// Configurar middlewares
app.use(express.json());

// Cargar rutas
loadRoutes(app);

module.exports = app;