const app = require('./app'); // Importa la instancia de la aplicación Express desde app.js
const config = require('./config'); // Importa la configuración desde config.js

const PORT = config.port || 3000; // Define el puerto usando la configuración o por defecto 3000

app.listen(PORT, () => { // Inicia el servidor y escucha en el puerto especificado
  console.log(`Servidor corriendo en http://localhost:3000/`); // Imprime un mensaje en la consola indicando que el servidor está corriendo
});

//Rutas:
// GET http://localhost:3000/api/user/(numero entero)