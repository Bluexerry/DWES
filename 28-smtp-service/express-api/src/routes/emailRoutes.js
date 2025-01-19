// src/routes/emailRoutes.js

const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para enviar un correo
router.post('/send-email', emailController.sendEmailController);

module.exports = router;