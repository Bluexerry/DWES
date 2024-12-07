// src/utils/swagger.js

const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Ruta correcta al archivo swagger.yaml en la raíz del proyecto
const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, '../../swagger.yaml'), 'utf8')
);

module.exports = {
  swaggerUi,
  swaggerDocument,
};