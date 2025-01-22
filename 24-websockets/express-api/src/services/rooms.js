const Room = require('../models/Room');

// Predefinir las tres salas
const rooms = [
  new Room(1, 'Sala 1'),
  new Room(2, 'Sala 2'),
  new Room(3, 'Sala 3'),
];

/**
 * Obtiene todas las salas.
 * @returns {Room[]} - Lista de salas.
 */
const getAllRooms = () => {
  return rooms;
};

/**
 * Obtiene una sala por su ID.
 * @param {number} id - ID de la sala.
 * @returns {Room|null} - La sala si existe, o null.
 */
const getRoomById = (id) => {
  return rooms.find((room) => room.id === id) || null;
};

module.exports = {
  getAllRooms,
  getRoomById,
};