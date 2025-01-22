const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const roomsController = require('../controllers/rooms'); // Importar el controlador de salas

// Rutas de usuarios
router.get('/users', usersController.getUsers);

// Rutas de salas
router.get('/rooms', roomsController.getAllRooms);
router.get('/rooms/:id', roomsController.getRoomById);

module.exports = router;