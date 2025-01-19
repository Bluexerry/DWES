// src/services/emailService.js

const nodemailer = require('nodemailer');
const config = require('../config');

// Crear el transporter de Nodemailer para Mailhog
const transporter = nodemailer.createTransport({
  host: config.smtp.host, // Host SMTP (Mailhog)
  port: config.smtp.port, // Puerto SMTP (Mailhog)
  secure: false, // false para puertos 1025
  auth: config.smtp.user && config.smtp.pass ? {
    user: config.smtp.user,
    pass: config.smtp.pass,
  } : undefined, // Solo autentica si las credenciales están definidas
});

// Verificar la conexión del transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Error de conexión SMTP:', error);
  } else {
    console.log('Servidor SMTP listo para enviar mensajes');
  }
});

/**
 * Enviar un correo electrónico
 * @param {Object} mailOptions - Opciones del correo
 * @returns {Promise} - Resultado del envío
 */
async function sendEmail(mailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error al enviar correo:', error);
    throw error;
  }
}

module.exports = {
  sendEmail,
};