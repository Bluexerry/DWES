// src/index.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Especifica la ruta al .env

const config = require('./config'); // Importa la configuración
const app = require('./app'); // Importa la aplicación

// Debug: Verificar variables SMTP
console.log('Configuración SMTP:', config.smtp);

// Iniciar el servidor
app.listen(config.port, () => {
  console.log(`Servidor ejecutándose en el puerto ${config.port}`);
});

// Notas:
// Iniciar Docker
// Iniciar el servicio de docker-compose con el comando docker-compose up -d
// Iniciar el servidor con el comando node src/index.js.

/*curl -X POST http://localhost:3000/api/email/send-email \
     -H "Content-Type: application/json" \
     -d '{
           "to": "destinatario@example.com",
           "subject": "Asunto de prueba",
           "text": "Este es un correo de prueba enviado desde la API.",
           "html": "<h1>Correo de Prueba</h1><p>Este es un correo de prueba enviado desde la API.</p>"
         }' */