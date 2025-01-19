// src/services/apiService.js

const axios = require('axios');
const config = require('../config');

/**
 * Obtener datos de un usuario desde una API externa.
 * @param {number|string} id - ID del usuario.
 * @returns {Promise<Object>} - Datos del usuario.
 */
async function getUser(id) {
  try {
    // Realiza una petición GET a la API externa para obtener datos del usuario
    const response = await axios.get(`${config.externalApiUrl}/users/${id}`);
    return response.data; // Retorna los datos del usuario
  } catch (error) {
    console.error('Error al obtener el usuario:', error.message);
    throw new Error('No se pudo obtener el usuario.');
  }
}

module.exports = {
  getUser,
};