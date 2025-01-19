
# Servicio para Cliente SMTP

Este documento detalla la configuración y uso de servicios SMTP para pruebas y producción, incluyendo herramientas como **Mailhog**, **Nodemailer** y el uso de **Gmail** como servidor SMTP. A continuación, se desarrolla cada sección en detalle.

## Mailhog: Servidor Local SMTP para Pruebas

Mailhog es un servidor SMTP liviano que permite capturar correos electrónicos enviados para pruebas en un entorno controlado.

### Configuración de Mailhog

- **Archivo `docker-compose.yml`**
  ```yaml
  version: "3"
  services:
    mailhog:
      image: "mailhog/mailhog"
      ports:
        - "1025:1025"
        - "8025:8025"
  ```

### Comandos Básicos

- **Arrancar el servicio:**  
  ```bash
  docker-compose up -d
  ```
- **Detener el servicio:**  
  ```bash
  docker-compose down
  ```

Mailhog estará accesible en el puerto `8025` para la interfaz web y `1025` para capturar correos.

---

## Nodemailer: Librería para Envío de Correos Electrónicos

Nodemailer es una biblioteca para Node.js que simplifica el envío de correos electrónicos. Su flexibilidad permite configurarlo tanto para servidores locales como externos.

### Ejemplo de Integración

```javascript
const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
    secure: false, // No se usa SSL en Mailhog
  });

  let info = await transporter.sendMail({
    from: 'its@me.com',
    to: "nose@cual.es",
    subject: "Mensaje de prueba",
    text: "Este es el texto",
    html: "<h1 style='color: blue'>Este es el HTML</h1>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
```

---

## Uso de Gmail como Servidor SMTP

Gmail puede usarse como servidor SMTP para el envío de correos reales.

### Configuración de Gmail

1. **Habilitar aplicaciones poco seguras** en tu cuenta de Gmail.
2. **Configurar el `transporter` en Nodemailer:**
   ```javascript
   let transporter = nodemailer.createTransport({
     service: 'gmail',
     secure: false, // No usar SSL
     auth: {
       user: process.env.SMTP_USER, // Usuario de Gmail
       pass: process.env.SMTP_PASS, // Contraseña de Gmail
     },
   });
   ```

---

## Integración de Nodemailer en una API

A continuación, se describe un ejemplo de integración de Nodemailer como servicio en una API.

### Ejemplo de Configuración Global

```javascript
const nodemailer = require('nodemailer');

let configGlobalSMTP = null;
let transporter = null;

function createTransport(configSMTP) {
  configGlobalSMTP = configSMTP;
  const config = {
    host: configSMTP.host,
    port: configSMTP.port,
    secure: false,
    auth: {
      user: configSMTP.user,
      pass: configSMTP.pass,
    },
  };

  transporter = nodemailer.createTransport(config);

  transporter.verify((error) => {
    if (error) {
      console.error(`Error verificando el transporte SMTP: ${error}`);
    } else {
      console.info('Servidor listo para enviar mensajes');
    }
  });
}

function send({ message }) {
  if (!transporter) {
    const error = new Error('El transporte SMTP no está configurado');
    error.responseCode = 550;
    throw error;
  }

  return transporter.sendMail({
    from: configGlobalSMTP.auth.user,
    ...message,
  });
}

module.exports = { createTransport, send };
```

---

Este documento cubre tanto la teoría como la práctica para configurar y operar un cliente SMTP utilizando herramientas modernas como Mailhog y Nodemailer, permitiendo el desarrollo seguro y controlado de aplicaciones que dependen del envío de correos electrónicos.