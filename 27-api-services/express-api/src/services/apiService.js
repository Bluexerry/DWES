const axios = require('axios'); // Importa la biblioteca Axios para realizar peticiones HTTP
const config = require('../config'); // Importa la configuración desde config.js

// Función asíncrona para obtener datos de un usuario por su ID
async function getUser(id) {
  try {
    const response = await axios.get(`${config.externalApiUrl}/users/${id}`); // Realiza una petición GET a la API externa para obtener el usuario con el ID proporcionado
    return response.data; // Retorna los datos del usuario obtenidos de la respuesta
  } catch (error) {
    throw new Error('Error al obtener el usuario'); // Lanza un error si la petición falla
  }
}

module.exports = {
  getUser // Exporta la función getUser para ser utilizada en otros módulos
};