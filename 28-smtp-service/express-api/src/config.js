// src/config.js

module.exports = {
  port: process.env.PORT || 3000, // Puerto en el que se ejecutará el servidor
  smtp: {
    host: process.env.SMTP_HOST, // Host SMTP
    port: process.env.SMTP_PORT, // Puerto SMTP
    user: process.env.SMTP_USER, // Usuario SMTP
    pass: process.env.SMTP_PASS, // Contraseña SMTP
  },
};