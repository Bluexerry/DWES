// Carga las variables de entorno definidas en un archivo '.env' en el proyecto.
// Esto permite que puedas acceder a ellas a través de 'process.env'.
require('dotenv').config();

// Define un objeto 'app' que contiene la configuración de la aplicación.
// El puerto de la aplicación se establece desde la variable de entorno 'PORT' o, si no está definida,
// se utiliza el valor por defecto 3000.
const app = {
  port: process.env.PORT || 3000, // 'process.env.PORT' obtiene el valor de la variable de entorno 'PORT'.
};

// Exporta el objeto 'app' para que pueda ser utilizado en otros archivos de la aplicación,
// como el archivo donde se inicie el servidor.
module.exports = { app };
