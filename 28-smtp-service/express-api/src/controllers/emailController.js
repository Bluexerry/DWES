// src/controllers/emailController.js

const config = require('../config'); // Importa la configuración
const emailService = require('../services/emailService');

/**
 * Controlador para enviar un correo electrónico.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
async function sendEmailController(req, res) {
  const { to, subject, text, html } = req.body;

  // Validar los campos requeridos
  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ mensaje: 'Datos incompletos para enviar el correo.' });
  }

  const mailOptions = {
    from: config.smtp.user || 'no-reply@example.com', // Remitente por defecto
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await emailService.sendEmail(mailOptions);
    res.status(200).json({ mensaje: 'Correo enviado exitosamente.', messageId: info.messageId });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al enviar el correo.', error: error.message });
  }
}

module.exports = {
  sendEmailController,
};