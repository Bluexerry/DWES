// Importa la aplicación Express desde el archivo './app'.
// Este archivo probablemente contiene la configuración y las rutas de la aplicación.
const app = require('./app');

// Importa la configuración de la aplicación desde el archivo './config'.
// Este archivo probablemente contiene configuraciones globales, como el puerto y otras variables.
const config = require('./config');

// Obtiene el puerto desde la configuración de la aplicación. Si no está definido, se usa 3000 como valor por defecto.
const port = config.app.port || 3000; // Usa 'config.app.port' para obtener el puerto o 3000 por defecto.

// Inicia el servidor Express y lo pone a escuchar en el puerto especificado.
app.listen(port, (err) => {
    if (err) {
        // Si ocurre un error al iniciar el servidor, se muestra el error en la consola.
        console.error('Error al iniciar el servidor:', err);
        return; // Termina la ejecución si ocurre un error.
    }
    // Si el servidor se inicia correctamente, se muestra un mensaje en la consola indicando que el servidor está escuchando.
    console.log(`Servidor escuchando en el puerto ${port}`);
});

// Pruebas:
// http://localhost:3000/api/ping
// curl http://localhost:3000/api/ping
