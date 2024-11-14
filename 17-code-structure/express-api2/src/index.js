// Requiere la instancia de la aplicación Express desde el archivo 'app.js'.
const app = require('./app');

// Requiere la configuración de la aplicación, que incluye el puerto en el que el servidor debe escuchar.
const config = require('./config');

// Requiere el módulo 'logger' para registrar mensajes de log.
const logger = require('./utils/logger');

// Inicia el servidor y hace que escuche en el puerto configurado.
app.listen(config.port, (err) => {
    // Si ocurre un error al intentar iniciar el servidor, se registra el error con el logger.
    if (err) {
        logger.error(`Error al iniciar el servidor: ${err}`);
        return;  // Si hay un error, no continúa ejecutando el resto del código.
    }
    // Si el servidor se inicia correctamente, se registra un mensaje indicando que el servidor está funcionando.
    logger.info(`Server running on port ${config.port}`);
});


// Pruebas:
// node src/index.js
// curl http://localhost:3000/fibonacci/10
// npm test