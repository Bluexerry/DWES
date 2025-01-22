const roomsService = require('../services/rooms');

/**
 * Obtiene todas las salas.
 */
exports.getAllRooms = (req, res) => {
  const rooms = roomsService.getAllRooms();
  res.json(rooms);
};

/**
 * Obtiene una sala por ID.
 */
exports.getRoomById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const room = roomsService.getRoomById(id);
  if (!room) {
    return res.status(404).json({ error: 'Sala no encontrada.' });
  }
  res.json(room);
};