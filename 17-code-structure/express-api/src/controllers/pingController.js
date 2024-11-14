// Define una función llamada 'ping' que maneja las solicitudes de tipo ping (comúnmente usada para verificar el estado de un servidor).
const ping = (req, res) => {
    // Responde con un código de estado HTTP 200 (OK) y el mensaje 'pong', indicando que el servidor está activo.
    res.status(200).send('pong');
};

// Exporta la función 'ping' para que pueda ser utilizada en otras partes de la aplicación (como en las rutas).
module.exports = { ping };
