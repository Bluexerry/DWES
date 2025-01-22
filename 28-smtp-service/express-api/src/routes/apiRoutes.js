// src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Ruta para enviar un correo
router.post('/email/send-email', emailController.sendEmailController);

module.exports = router;