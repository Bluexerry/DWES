// Requiere el módulo 'dotenv' para cargar las variables de entorno definidas en el archivo '.env'.
require('dotenv').config();

// Exporta un objeto con la configuración de la aplicación, en este caso, el puerto en el que se ejecutará el servidor.
module.exports = {
  // Utiliza el valor de la variable de entorno 'PORT', o si no está definida, utiliza el puerto 3000 por defecto.
  port: process.env.PORT || 3000,
};
